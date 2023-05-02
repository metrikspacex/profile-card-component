import type { ClassValue } from "clsx";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export default function merge(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
