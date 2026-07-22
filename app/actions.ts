"use server";

export type FormState = {
  ok: boolean;
  message: string;
};

function required(value: FormDataEntryValue | null, label: string) {
  const text = String(value ?? "").trim();
  if (!text) throw new Error(`${label} is required.`);
  return text;
}

/**
 * Quote / contact submissions.
 * Integrate with email or CRM (HubSpot, Zoho, Salesforce, etc.) here —
 * Niagra may want submissions to feed directly into the sales pipeline.
 */
export async function submitQuote(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    const payload = {
      name: required(formData.get("name"), "Name"),
      company: required(formData.get("company"), "Company"),
      email: required(formData.get("email"), "Email"),
      phone: String(formData.get("phone") ?? "").trim(),
      projectType: required(formData.get("projectType"), "Project type"),
      location: required(formData.get("location"), "Project location"),
      quantity: String(formData.get("quantity") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
      source: String(formData.get("source") ?? "quote-form"),
      submittedAt: new Date().toISOString(),
    };

    // TODO: Send to email/CRM. For now, log for development.
    console.log("[Niagra Quote Lead]", payload);

    return {
      ok: true,
      message:
        "Thank you. Our team will review your enquiry and respond shortly.",
    };
  } catch (error) {
    return {
      ok: false,
      message:
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again or call us.",
    };
  }
}

/**
 * Gated catalog / company profile download lead magnet.
 * Wire to CRM and email the PDF link or attachment after capture.
 */
export async function submitCatalogGate(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    const payload = {
      name: required(formData.get("name"), "Name"),
      email: required(formData.get("email"), "Email"),
      company: required(formData.get("company"), "Company"),
      resource: String(formData.get("resource") ?? "company-profile"),
      submittedAt: new Date().toISOString(),
    };

    console.log("[Niagra Catalog Lead]", payload);

    return {
      ok: true,
      message:
        "Thank you. Your download link will be sent to your email shortly.",
    };
  } catch (error) {
    return {
      ok: false,
      message:
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
    };
  }
}
