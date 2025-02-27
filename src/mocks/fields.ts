import { FormFieldConfig } from "../types/formField";

export const fields: FormFieldConfig[] = [
  {
    id: "title",
    name: "title",
    type: "text",
    label: "Ad Title",
    required: true,
    regex: "/^[a-zA-Z0-9 ]{1,50}$/",
    placeholder: "Enter the ad title",
    errorMessage: {
      required: "Title is required.",
      regex:
        "Title must be 1-50 characters long and can only contain letters, numbers, and spaces.",
    },
  },
  {
    id: "description",
    name: "description",
    type: "text",
    label: "Description",
    required: true,
    min: 10,
    max: 200,
    placeholder: "Enter the description",
    errorMessage: {
      required: "Description is required.",
      min: "Description must be at least 10 characters long.",
      max: "Description must be at most 200 characters long.",
    },
  },
  {
    id: "costPerClick",
    name: "costPerClick",
    type: "price",
    label: "Cost Per Click",
    required: true,
    min: 0,
    max: 10000,
    placeholder: "Enter the cost per click",
    errorMessage: {
      required: "Cost per click is required.",
      min: "Cost per click must be at least 0.",
      max: "Cost per click must be at most 10000.",
    },
  },
  {
    id: "maxClickCount",
    name: "maxClickCount",
    type: "number",
    label: "Max Click Count",
    required: false,
    min: 1,
    max: 10000,
    placeholder: "Enter the max click count",
    errorMessage: {
      min: "Max click count must be at least 1.",
      max: "Max click count must be at most 10000.",
    },
  },
  {
    id: "category",
    name: "category",
    type: "dropdown",
    label: "Category",
    required: true,
    options: [
      { value: "electronics", label: "Electronics" },
      { value: "furniture", label: "Furniture" },
      { value: "clothing", label: "Clothing" },
    ],
    placeholder: "Select a category",
    errorMessage: {
      required: "Please select a category.",
    },
  },
  {
    id: "terms",
    name: "terms",
    type: "checkbox",
    label: "I agree to the terms and conditions",
    required: true,
    errorMessage: {
      required: "You must agree to the terms and conditions.",
    },
    placeholder: "I agree to the terms and conditions",
  },
];

export const fieldsinPersian: FormFieldConfig[] = [
  {
    id: "title",
    name: "title",
    type: "text",
    label: "عنوان آگهی",
    required: true,
    regex: "/^[a-zA-Z0-9 ]{1,50}$/",
    placeholder: "عنوان آگهی را وارد کنید",
    errorMessage: {
      required: "عنوان آگهی الزامی است.",
      regex:
        "عنوان باید بین 1 تا 50 کاراکتر باشد و فقط می‌تواند شامل حروف انگلیسی، اعداد و فاصله باشد.",
    },
  },
  {
    id: "description",
    name: "description",
    type: "text",
    label: "توضیحات",
    required: true,
    min: 10,
    max: 200,
    placeholder: "توضیحات را وارد کنید",
    errorMessage: {
      required: "توضیحات الزامی است.",
      min: "توضیحات باید حداقل 10 کاراکتر باشد.",
      max: "توضیحات باید حداکثر 200 کاراکتر باشد.",
    },
  },
  {
    id: "costPerClick",
    name: "costPerClick",
    type: "price",
    label: "هزینه هر کلیک",
    required: true,
    min: 0,
    max: 10000,
    placeholder: "هزینه هر کلیک را وارد کنید",
    errorMessage: {
      required: "هزینه هر کلیک الزامی است.",
      min: "هزینه هر کلیک باید حداقل 0 باشد.",
      max: "هزینه هر کلیک باید حداکثر 10000 باشد.",
    },
  },
  {
    id: "maxClickCount",
    name: "maxClickCount",
    type: "number",
    label: "حداکثر تعداد کلیک",
    required: false,
    min: 1,
    max: 10000,
    placeholder: "حداکثر تعداد کلیک را وارد کنید",
    errorMessage: {
      min: "حداکثر تعداد کلیک باید حداقل 1 باشد.",
      max: "حداکثر تعداد کلیک باید حداکثر 10000 باشد.",
    },
  },
  {
    id: "category",
    name: "category",
    type: "dropdown",
    label: "دسته‌بندی",
    required: true,
    options: [
      { value: "electronics", label: "الکترونیک" },
      { value: "furniture", label: "مبلمان" },
      { value: "clothing", label: "پوشاک" },
    ],
    placeholder: "یک دسته‌بندی انتخاب کنید",
    errorMessage: {
      required: "لطفاً یک دسته‌بندی را انتخاب کنید.",
    },
  },
  {
    id: "terms",
    name: "terms",
    type: "checkbox",
    label: "من با شرایط و ضوابط موافقم",
    required: true,
    errorMessage: {
      required: "شما باید با شرایط و ضوابط موافقت کنید.",
    },
    placeholder: "من با شرایط و ضوابط موافقم",
  },
];
