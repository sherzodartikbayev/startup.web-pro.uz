export interface ICourse {
	_id: string
	title: string
	description: string
	learning: string
	requirements: string
	level: string
	category: string
	language: string
	oldPrice: number
	currentPrice: number
	previewImage: string
	published: boolean
	slug: string
	tags: string
}

export interface ISection {
	_id: string
	title: string
	position: number
	course: string
}

export interface ILesson {
	_id: string
	title: string
	position: string
	videoUrl: string
	content: string
	free: boolean
	duration: {
		hours: string
		minutes: string
		seconds: string
	}
}

export interface SearchParamsProps {
	searchParams: { [key: string]: string | undefined }
}

export interface IUser {
	_id: string
	clerkId: string
	fullName: string
	email: string
	picture: string
	role: string
	bio: string
	phone: string
	job: string
	website: string
	linkedin: string
	github: string
	youtube: string
}
