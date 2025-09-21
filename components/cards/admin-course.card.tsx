'use client'

import { ICourse } from '@/app.types'
import { Card, CardContent } from '../ui/card'
import Image from 'next/image'
import { Separator } from '../ui/separator'
import { Button } from '../ui/button'

function AdminCourseCard({ course }: { course: ICourse }) {
	return (
		<Card className='w-full'>
			<CardContent className='relative h-56 w-full'>
				<Image
					fill
					src={course.previewImage}
					alt={course.title}
					className='rounded-md object-cover'
				/>
			</CardContent>

			<div className='my-4 flex flex-col space-y-2 px-2'>
				<h2 className='line-clamp-1 font-space-grotesk text-2xl font-bold'>
					{course.title}
				</h2>

				<Separator />

				<div className='flex items-center justify-between'>
					<div className='flex items-center gap-2'>
						<Image
							src={course.instructor.picture}
							alt={course.instructor.fullName}
							width={40}
							height={40}
							className='rounded-full object-cover'
						/>
						<p className='text-sm text-muted-foreground'>
							{course.instructor.fullName}
						</p>
					</div>

					<Button
						className='w-fit font-space-grotesk font-bold'
						rounded='full'
						size='sm'
						variant={course.published ? 'destructive' : 'default'}
					>
						{course.published ? 'Unpublish' : 'Publish'}
					</Button>
				</div>
			</div>
		</Card>
	)
}

export default AdminCourseCard
