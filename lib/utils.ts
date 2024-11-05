import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateYears(fromDate: Date): number {
  const today = new Date();
  let years = today.getFullYear() - fromDate.getFullYear();
  const monthDiff = today.getMonth() - fromDate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < fromDate.getDate())) {
    years--;
  }
  
  return years;
}