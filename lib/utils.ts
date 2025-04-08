import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { enUS, ruRU, trTR } from '@clerk/localizations'
import { uzUZ } from './uz-UZ'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function localization(lng: string) {
  if(lng === 'en') return enUS
  if(lng === 'ru') return ruRU
  if(lng === 'tr') return trTR
  if(lng === 'uz') return uzUZ  
}