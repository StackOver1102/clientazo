import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Merges class names into a single string
 * @param classes - An array of class names or falsy values
 * @returns A string of merged class names, filtered for truthy values
 */
export const mcn = (
  classes: (string | undefined | null | false)[] = []
): string => {
  return classes
    .filter(
      (className) =>
        typeof className === "string" && className.trim().length > 0
    )
    .join(" ");
};
