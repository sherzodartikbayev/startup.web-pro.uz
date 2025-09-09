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
	instructor: IUser
	updatedAt: string
	totalLessons: number
	totalSections: number
	totalDuration: string
}

export interface ISection {
	_id: string
	title: string
	position: number
	course: string
	lessons: ILesson[]
}

export interface ILesson {
	_id: string
	title: string
	position: number
	videoUrl: string
	content: string
	free: boolean
	duration: {
		hours: number
		minutes: number
		seconds: number
	}
	userProgress: IUserProgress[]
}

export interface IUserProgress {
	userId: string
	lessonId: string
	isCompleted: string
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
