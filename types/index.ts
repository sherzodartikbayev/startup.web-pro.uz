import { LucideIcon } from 'lucide-react'
import { ReactNode } from 'react'
import { IconType } from 'react-icons/lib'

export interface ChildProps {
	children: ReactNode
}

export interface LngParams {
	params: { lng: string }
}

export interface LanguageDropdownProps {
	isMobbile?: boolean
}

export interface ICourse {
	title: string
	previewImage: string
	level: string
	author: {
		image: string
		name: string
	}
	oldPrice: number
	currentPrice: number
}

export interface ICategory {
	label: string
	icon: string
}

export interface IInstructor {
	name: string
	image: string
	job: string
}

export interface IAuthor {
	name: string
	image: { url: string }
	bio: string
	blogs: IBlog[]
	id: string
}

export interface ILearningJourney {
	title: string
	excerpt: string
	image: string
}

export interface ICategoryAndTags {
	name: string
	slug: string
	blogs: IBlog[]
}

export interface IBlog {
	title: string
	description: string
	author: IAuthor
	category: ICategoryAndTags
	tag: ICategoryAndTags
	image: { url: string }
	createdAt: string
	content: { html: string }
	slug: string
}

export interface ITopBar {
	label: string
	description?: string
	extra?: string
}

export interface IInstructorHeader {
	title: string
	description: string
}

export interface IStatisticsCard {
	label: string
	value: string
	Icon: LucideIcon | IconType
}

export interface IInstructorMyCourseDetail {
	params: { courseId: string }
}

export interface IConfirmDeleteModal {
	onConfirm: () => void
	children: ReactNode
}
