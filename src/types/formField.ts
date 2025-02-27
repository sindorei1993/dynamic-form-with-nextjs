export interface FormFieldConfig {
  id: string;
  name: string;
  type: string;
  label: string;
  required?: boolean;
  min?: number;
  max?: number;
  options?: FormFieldOption[];
  regex?: string;
  errorMessage: Record<string, string>;
  placeholder: string;
}

interface FormFieldOption {
  value: string;
  label: string;
}

export interface FormFieldsResponse {
  fields: FormFieldConfig[];
  formTitle: string;
  buttonText: string;
}
