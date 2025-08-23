'use server'

import Course from '@/database/course.model'
import { connectToDatabase } from '@/lib/mongoose'
import { ICreateCourse } from './types'
import { ICourse } from '@/app.types'
import { revalidatePath } from 'next/cache'
import User from '@/database/user.model'

export const createCourse = async (data: ICreateCourse, clerkId: string) => {
	try {
		await connectToDatabase()
		const user = await User.findOne({ clerkId })
		await Course.create({ ...data, instructor: user._id })
		revalidatePath('/en/instructor/my-courses')
	} catch (error) {
		throw new Error('Soething went wrong while creating course!')
	}
}

export const getCourses = async (clerkId: string) => {
	try {
		await connectToDatabase()
		const user = await User.findOne({ clerkId })
		const courses = await Course.find({ instructor: user._id })
		return courses as ICourse[]
	} catch (error) {
		throw new Error('Something went wrong while creating courses!')
	}
}

export const getCourseById = async (id: string) => {
	try {
		await connectToDatabase()
		const course = await Course.findById(id)
		return course as ICourse
	} catch (error) {
		throw new Error('Something went wrong while getting course!')
	}
}

export const updateStatusCourse = async (
	id: string,
	status: boolean,
	path: string
) => {
	try {
		await connectToDatabase()
		await Course.findByIdAndUpdate(id, { published: status })
		revalidatePath(path)
	} catch (error) {
		throw new Error('Something went wrong while updating course status!')
	}
}

export const deleteCourse = async (id: string, path: string) => {
	try {
		await connectToDatabase()
		await Course.findByIdAndDelete(id)
		revalidatePath(path)
	} catch (error) {
		throw new Error('Something went wrong while deleting course!')
	}
}
