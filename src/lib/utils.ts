import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function to merge class names
// It uses clsx to merge the class names and tailwind-merge to merge the class names
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
