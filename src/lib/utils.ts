import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatHour(date: Date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const sufix = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  return (hours ? hours < 10 ? '0' + hours : hours : 12) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ' ' + sufix;
}
