import { FormFieldConfig } from "../types/formField";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isFieldString = (
  field: string | number | boolean,
  form: FormFieldConfig
): field is string => !form.max && !form.min;

export function numberFormat(value: number) {
  const rtl = localStorage.getItem("rtl") === "true";
  return new Intl.NumberFormat(rtl ? "fa-IR" : "en-UK", {
    style: "currency",
    currency: "IRR",
    maximumFractionDigits: 0,
  })
    .format(value)
    .trim();
}
