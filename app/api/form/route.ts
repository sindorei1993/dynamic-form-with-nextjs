import { fields, fieldsinPersian } from "@/src/mocks/fields";
import { FormFieldsResponse } from "@/src/types/formField";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const rtl = searchParams.get("rtl") === "true";

  const formFields: FormFieldsResponse = {
    fields: rtl ? fieldsinPersian : fields,
    formTitle: rtl ? "ثبت آگهی جدید" : "New Ad",
    buttonText: rtl ? "ثبت" : "Submit",
  };

  return NextResponse.json(formFields);
}
