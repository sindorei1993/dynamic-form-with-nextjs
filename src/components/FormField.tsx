import React, { useCallback, useEffect } from "react";
import { FormFieldConfig } from "../types/formField";
import { numberFormat } from "../utils/utils";

interface FormFieldProps {
  field: FormFieldConfig;
  onChange: (name: string, value: string | number | boolean) => void;
  value: string | number | boolean;
  hasError: boolean;
}

const FormField: React.FC<FormFieldProps> = ({
  field,
  onChange,
  value,
  hasError,
}) => {
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const newValue =
      field.type === "checkbox"
        ? (e.target as HTMLInputElement).checked
        : e.target.value;
    onChange(field.name, newValue);
    setErrorMessage(validate(newValue));
  };

  const validate = useCallback(
    (value: string | boolean) => {
      if (field.required && !value) {
        return field.errorMessage.required;
      }
      if (field.min !== undefined && value !== "") {
        if (
          field.type !== "number" &&
          field.type !== "price" &&
          String(value).length < field.min
        ) {
          return field.errorMessage.min;
        } else if (Number(value) < field.min) {
          return field.errorMessage.min;
        }
      }
      if (field.max && value !== "") {
        if (
          field.type !== "number" &&
          field.type !== "price" &&
          String(value).length > field.max
        ) {
          return field.errorMessage.max;
        } else if (Number(value) > field.max) {
          return field.errorMessage.max;
        }
      }
      if (field.regex) {
        const regex = new RegExp(field.regex.slice(1, -1));
        if (!regex.test(value as string)) {
          return field.errorMessage.regex;
        }
      }
      return null;
    },
    [field]
  );

  useEffect(() => {
    if (hasError) {
      setErrorMessage(validate(value as string));
    }
  }, [hasError, value, validate]);

  return (
    <div
      className={`flex mb-4 w-full max-w-md ${
        field.type === "checkbox" ? "flex-row flex-wrap gap-2" : "flex-col"
      }`}
    >
      <label className="block text-sm font-medium mb-1">
        {field.label} {field.required && <span>*</span>}
      </label>
      {field.type === "dropdown" ? (
        <select
          value={value as string}
          onChange={handleChange}
          title={field.placeholder}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-black  dark:text-gray-300 "
        >
          <option value="" disabled>
            {field.placeholder}
          </option>
          {field.options?.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : field.type === "checkbox" ? (
        <input
          type="checkbox"
          checked={value as boolean}
          onChange={handleChange}
          title={field.placeholder}
          className="block self-center px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      ) : (
        <input
          type={field.type === "price" ? "number" : field.type}
          value={value as number | string}
          onChange={handleChange}
          placeholder={field.placeholder}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      )}
      {field.type === "price" && (
        <span className="text-sm mt-1 font-[family-name:var(--font-dana)]">
          {numberFormat(Number(value))}
        </span>
      )}
      {errorMessage && (
        <span className="text-red-500 text-sm mt-1">{errorMessage}</span>
      )}
    </div>
  );
};

export default FormField;
