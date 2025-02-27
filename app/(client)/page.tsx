"use client";
import DynamicForm from "@/src/components/DynamicForm";
import Button from "@/src/components/ui/button";
import Skeleton from "@/src/components/ui/skeleton";
import Toast from "@/src/components/ui/toast";
import { FormFieldsResponse } from "@/src/types/formField";
import { useEffect, useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState<FormFieldsResponse | undefined>(
    undefined
  );
  const [rtl, setRtl] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [toastData, setToastData] = useState<
    Record<string, string | number | boolean> | undefined
  >(undefined);

  useEffect(() => {
    const fetchFormFields = async () => {
      setIsLoading(true);
      const response = await fetch(`/api/form?rtl=${rtl}`);
      const data = await response.json();
      setFormData(data);
      setIsLoading(false);
    };

    fetchFormFields();
    localStorage.setItem("rtl", rtl.toString());
  }, [rtl]);

  const SubmitForm = (data: Record<string, string | number | boolean>) => {
    setIsSubmiting(true);
    setToastData(data);
    setTimeout(() => {
      setIsSubmiting(false);
      setToastData(undefined);
    }, 3000);
  };
  return (
    <div
      className="grid grid-rows-[50px_1fr_80px] items-center justify-items-center min-h-screen p-4 md:p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]  rtl:font-[family-name:var(--font-dana)]"
      dir={rtl ? "rtl" : "ltr"}
    >
      <header className="flex flex-col justify-center items-center gap-4 max-w-sm">
        <h1 className="text-3xl font-bold">
          {!isLoading && formData?.formTitle ? (
            formData?.formTitle
          ) : (
            <Skeleton rows={1} />
          )}
        </h1>
      </header>
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        {!isLoading && formData ? (
          <DynamicForm
            fields={formData.fields}
            buttonText={formData?.buttonText}
            onSubmit={SubmitForm}
            isLoading={isSubmiting}
          />
        ) : (
          <Skeleton rows={6} />
        )}
        {toastData && <Toast message={toastData} type="success" />}
      </main>
      <footer className="row-start-3 flex flex-col gap-6 flex-wrap items-center justify-center">
        <span>Reza Pourmoradi</span>
        <Button
          variant="secondary"
          onClick={() => {
            setRtl(!rtl);
          }}
          disabled={isLoading}
          className="min-w-[165px]"
        >
          {rtl ? "تغییر به انگلیسی" : "Change to Persian"}
        </Button>
      </footer>
    </div>
  );
}
