'use server'

import Course from '@/database/course.model'
import { connectToDatabase } from '@/lib/mongoose'
import { ICreateCourse } from './types'
import { ICourse } from '@/app.types'
import { revalidatePath } from 'next/cache'

export const createCourse = async (data: ICreateCourse) => {
	try {
		await connectToDatabase()
		await Course.create(data)
		revalidatePath('/en/instructor/my-courses')
	} catch (error) {
		throw new Error('Something went wrong while creating course!')
	}
}

export const getCourses = async () => {
	try {
		await connectToDatabase()
		const courses = await Course.find()
		return courses as ICourse[]
	} catch (error) {
		throw new Error('Something went wrong while creating courses!')
	}
}
