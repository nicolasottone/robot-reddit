import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

//combines multiple class name atributes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
