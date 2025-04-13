import { ReactNode } from 'react'

export interface ChildProps {
	children: ReactNode
}

export interface LngParams { 
	 params: { lng: string } 
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
	length: number
}

export interface IAuthor {
	name: string
	bio: string
	id: string
	image: {
		url: string
	}
	blogs: IBlog[]
}

export interface ICategoryAndTags {
	name: string
	slug: string
	blogs: IBlog
}