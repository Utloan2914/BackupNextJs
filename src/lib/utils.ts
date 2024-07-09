import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Combines clsx and tailwind-merge functionality
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(...inputs));
}
