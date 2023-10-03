import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Common classes
export const btn = {
  primary:
    "rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
  secondary:
    "rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",
  "secondary-dark":
    "rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20",
};

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}
