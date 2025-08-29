import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const brutalistVariants = {
  button: {
    primary: "chunky-button-primary",
    secondary: "chunky-button-secondary", 
    yellow: "chunky-button-yellow",
    blue: "chunky-button-blue",
    pink: "chunky-button-pink",
  },
  block: {
    yellow: "color-block-yellow",
    blue: "color-block-blue", 
    pink: "color-block-pink",
  }
}
