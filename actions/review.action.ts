'use server'

import { IReview } from '@/app.types'
import Review from '@/database/review.model'
import User from '@/database/user.model'
import { connectToDatabase } from '@/lib/mongoose'
import { GetReviewParams } from './types'
import Course from '@/database/course.model'
import { revalidatePath } from 'next/cache'

export const createReview = async (
	data: Partial<IReview>,
	clerkId: string,
	course: string
) => {
	try {
		await connectToDatabase()
		const user = await User.findOne({ clerkId })
		await Review.create({ user: user._id, course, ...data })
	} catch (error) {
		throw new Error('Error creating review')
	}
}

export const getReview = async (course: string, clerkId: string) => {
	try {
		await connectToDatabase()
		const user = await User.findOne({ clerkId })
		const review = await Review.findOne({ user: user._id, course })
		return JSON.parse(JSON.stringify(review))
	} catch (error) {
		throw new Error('Error getting review')
	}
}

export const updateReview = async (data: Partial<IReview>) => {
	try {
		await connectToDatabase()
		await Review.findByIdAndUpdate(data._id, data)
	} catch (error) {
		throw new Error('Error updating review')
	}
}

export const getReviews = async (params: GetReviewParams) => {
	try {
		await connectToDatabase()
		const { page = 1, pageSize = 3, clerkId } = params

		const skipAmount = (page - 1) * pageSize

		const user = await User.findOne({ clerkId })
		const courses = await Course.find({ instructor: user._id })

		const reviews = await Review.find({ course: { $in: courses } })
			.sort({ createdAt: -1 })
			.populate({ path: 'user', model: User, select: 'fullName picture' })
			.populate({ path: 'course', model: Course, select: 'title' })
			.skip(skipAmount)
			.limit(pageSize)

		const totalReviews = await Review.find({
			course: { $in: courses },
		}).countDocuments()

		const isNext = totalReviews > skipAmount + reviews.length

		return { reviews, isNext, totalReviews }
	} catch (error) {
		throw new Error('Error getting reviews')
	}
}

export const setFlag = async (
	reviewId: string,
	isFlag: boolean,
	path: string
) => {
	try {
		await connectToDatabase()
		await Review.findByIdAndUpdate(reviewId, { isFlag })
		revalidatePath(path)
	} catch (error) {
		throw new Error('Error setting flag')
	}
}

export const getCourseReviews = async (course: string, limit: number) => {
	try {
		await connectToDatabase()
		const reviews = await Review.find({ course, isFlag: false })
			.sort({ createdAt: -1 })
			.populate({ path: 'user', model: User, select: 'fullName picture' })
			.limit(limit)

		return JSON.parse(JSON.stringify(reviews))
	} catch (error) {
		throw new Error('Error getting course reviews')
	}
}

export const getReviewsPercentage = async (id: string) => {
	try {
		await connectToDatabase()
		const reviews = await Review.find({ course: id, isFlag: false })
		const total = reviews.length

		const percentages: { [key: string]: number } = {
			1: 0,
			2: 0,
			3: 0,
			4: 0,
			5: 0,
		}

		reviews.forEach(review => {
			let rating = review.rating
			if (rating === 2.5) rating = 3
			else if (rating === 3.5) rating = 4
			else if (rating === 4.5) rating = 5

			percentages[rating] += 1
		})

		for (const key in percentages) {
			percentages[key] = Math.round((percentages[key] / total) * 100)
		}

		return percentages
	} catch (error) {
		throw new Error('Error getting reviews percentage')
	}
}
