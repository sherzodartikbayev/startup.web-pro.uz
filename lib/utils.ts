import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { enUS, ruRU, trTR } from '@clerk/localizations'
import { uzUZ } from './uz-UZ'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function localization(lng: string) {
	switch (lng) {
		case 'en':
			return enUS
		case 'ru':
			return ruRU
		case 'tr':
			return trTR
		case 'uz':
			return uzUZ
		default:
			return enUS
	}
}
