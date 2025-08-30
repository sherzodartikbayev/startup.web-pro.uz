import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { enUS, ruRU, trTR } from '@clerk/localizations'
import { uzUZ } from './uz-UZ'
import qs from 'query-string'
import { UrlQueryParams } from '@/types'
import { ILesson } from '@/app.types'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function localization(lng: string) {
	if (lng === 'en') return enUS
	if (lng === 'ru') return ruRU
	if (lng === 'tr') return trTR
	if (lng === 'uz') return uzUZ
}

export function getCurrentLanguage(lng: string) {
	if (lng === 'en') return 'English'
	if (lng === 'ru') return 'Русский'
	if (lng === 'tr') return 'Türkçe'
	if (lng === 'uz') return "O'zbekcha"
}

export function getReadingTime(content: string) {
	const WPS = 250 / 60

	let images = 0
	const regex = /\w/

	const words = content.split(' ').filter(word => {
		if (word.includes('<img')) {
			images += 1
		}
		return regex.test(word)
	}).length

	const imageAdjust = images * 4
	let imageSecs = 0
	let imageFactor = 12

	while (images) {
		imageSecs += imageFactor
		if (imageFactor > 3) {
			imageFactor -= 1
		}
		images -= 1
	}

	const minutes = Math.ceil(((words - imageAdjust) / WPS + imageSecs) / 60)

	if (minutes < 9) {
		return '0' + minutes
	} else {
		return minutes
	}
}

export function formUrlQuery({ key, params, value }: UrlQueryParams) {
	const currentUrl = qs.parse(params)

	currentUrl[key] = value

	return qs.stringifyUrl(
		{
			url: window.location.pathname,
			query: currentUrl,
		},
		{ skipNull: true }
	)
}

export const calculateTotalDuration = (lessons: ILesson[]) => {
	let totalMinutes = 0

	lessons.forEach(lesson => {
		totalMinutes +=
			lesson.duration.hours * 60 +
			lesson.duration.minutes +
			Math.round(lesson.duration.seconds / 60)
	})

	const totalHours = Math.floor(totalMinutes / 60)
	const remainingMinutes = totalMinutes % 60

	const formattedTotalDuration = `${totalHours}.${remainingMinutes
		.toString()
		.padStart(2, '0')}`

	return formattedTotalDuration
}

export const formatLessonTime = (lesson: ILesson) => {
	const duration = lesson.duration

	const totalSeconds =
		duration.hours * 36000 + duration.minutes * 60 + duration.seconds

	const hours = Math.floor(totalSeconds / 3600)
	const minutes = Math.floor((totalSeconds % 3600) / 60)
	const seconds = totalSeconds % 60

	const formattedTime = `${hours > 0 ? hours + ':' : ''}${
		minutes > 0 ? minutes + ':' : ''
	}${seconds.toString().padStart(2, '0')}`

	return formattedTime
}
