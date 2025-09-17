'use client'

import useTranslate from '@/hooks/use-translate'
import Image from 'next/image'
import ReactStars from 'react-stars'
import { PiStudentBold } from 'react-icons/pi'
import { Clock3 } from 'lucide-react'
import { ICourse } from '@/app.types'
import { format } from 'date-fns'

function Hero(course: ICourse) {
	const t = useTranslate()

	return (
		<>
			<h1 className='font-space-grotesk text-4xl font-bold'>{course.title}</h1>

			<p className='mt-4 text-muted-foreground'>{course.description}</p>

			<div className='mt-4 flex flex-wrap items-center gap-6'>
				<div className='flex items-center gap-2'>
					<Image
						width={50}
						height={50}
						alt={course.instructor.fullName}
						src={course.instructor.picture}
						className='rounded-full'
					/>
					<p className='font-space-grotesk font-bold'>
						{course.instructor.fullName}
					</p>
				</div>

				<div className='flex items-center gap-2 font-space-grotesk'>
					<p className='font-bold text-[#E59819]'>{course.rating}</p>
					<ReactStars value={course.rating} edit={false} color2='#E59819' />
					<p className='font-bold'>({course.reviewCount})</p>
				</div>

				<div className='flex items-center gap-2'>
					<PiStudentBold className='size-6' />
					<p className='font-space-grotesk font-bold'>
						{course.purchasedStudents} {t('students')}
					</p>
				</div>

				<div className='flex items-center gap-2'>
					<Clock3 className='size-6' />
					<p className='font-space-grotesk font-bold'>
						{t('lastUpdated')} {format(new Date(course.updatedAt), 'MM/yyyy')}
					</p>
				</div>
			</div>

			<Image
				src={course.previewImage}
				alt='course'
				width={1920}
				height={1080}
				className='mt-4 rounded-md object-cover'
			/>
		</>
	)
}

export default Hero
