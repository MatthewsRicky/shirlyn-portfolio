import { sendEmail } from "@/actions/sendEmails";


export const validateString = (value: unknown, maxLength: number) => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return typeof value === "string" && value.length <= maxLength;
  }
  return true;
};

export const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message;
  }

  if (typeof error === "object" && error !== null && "message" in error) {
    return String((error as { message: unknown }).message);
  }

  if (typeof error === "string") {
    return error;
  }

  return "Something went wrong";
};
