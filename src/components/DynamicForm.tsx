"use client";
import React, { useState } from "react";
import FormField from "./FormField";
import { FormFieldConfig } from "../types/formField";
import { isFieldString } from "../utils/utils";
import Button from "./ui/button";

interface DynamicFormProps {
  fields: FormFieldConfig[];
  onSubmit: (data: Record<string, string | number | boolean>) => void;
  isLoading: boolean;
  buttonText?: string;
}

const DynamicForm: React.FC<DynamicFormProps> = ({
  fields: formFields,
  onSubmit,
  isLoading,
  buttonText = "Submit",
}: DynamicFormProps) => {
  const [formData, setFormData] = useState<
    Record<string, string | number | boolean>
  >({});
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const handleChange = (name: string, value: string | number | boolean) => {
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: false });
  };

  const validateForm = () => {
    const newErrors: Record<string, boolean> = {};
    formFields.forEach((field) => {
      const value = formData[field.name];
      if (field.required && !value) {
        newErrors[field.name] = true;
      }
      if (field.min !== undefined && value !== "") {
        if (
          field.type !== "number" &&
          field.type !== "price" &&
          String(value).length < field.min
        ) {
          newErrors[field.name] = true;
        } else if (Number(value) < field.min) {
          newErrors[field.name] = true;
        }
      }
      if (field.max && value !== "") {
        if (
          field.type !== "number" &&
          field.type !== "price" &&
          String(value).length > field.max
        ) {
          newErrors[field.name] = true;
        } else if (Number(value) > field.max) {
          newErrors[field.name] = true;
        }
      }
      if (field.regex) {
        const regex = new RegExp(field.regex.slice(1, -1));
        if (isFieldString(value, field) && !regex.test(value as string)) {
          newErrors[field.name] = true;
        }
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (validateForm()) {
      console.log(formData);
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full md:w-sm">
      {formFields.map((field) => (
        <FormField
          key={field.id}
          field={field}
          value={formData[field.name] || ""}
          onChange={handleChange}
          hasError={errors[field.name]}
        />
      ))}
      <Button type="submit" disabled={isLoading} className="min-w-[150px]">
        {buttonText}
      </Button>
    </form>
  );
};

export default DynamicForm;
