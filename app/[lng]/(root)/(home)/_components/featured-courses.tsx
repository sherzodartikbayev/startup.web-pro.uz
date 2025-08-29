'use client'

import { ICourse } from '@/app.types'
import CourseCard from '@/components/cards/course.card'
import { Button } from '@/components/ui/button'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import { filterCourses } from '@/constants'
import useTranslate from '@/hooks/use-translate'
import { cn } from '@/lib/utils'
import { useState } from 'react'

interface Props {
	courses: ICourse[]
}

function FeaturedCourses({ courses }: Props) {
	const [filter, setFilter] = useState('all')
	const t = useTranslate()

	return (
		<div className='container mx-auto max-w-6xl py-12 max-xl:px-5'>
			<div className='flex items-center justify-between max-md:flex-col max-md:items-start'>
				<div className='flex flex-col space-y-1'>
					<h1 className='font-space-grotesk text-3xl font-bold'>
						{t('exploreCourses')}
					</h1>
					<p className='text-sm text-muted-foreground'>
						{t('exploreCoursesDescription')}
					</p>
				</div>

				<div className='flex items-center gap-1 self-end overflow-hidden max-md:mt-4 max-md:w-full max-md:rounded-full max-md:bg-primary max-md:p-2'>
					{filterCourses.map(item => (
						<Button
							key={item.name}
							rounded='full'
							variant={filter === item.name ? 'secondary' : 'ghost'}
							onClick={() => setFilter(item.name)}
							className={cn(
								'font-medium max-md:w-full max-md:bg-secondary',
								filter === item.name && 'text-primary'
							)}
						>
							{t(item.label)}
						</Button>
					))}
				</div>
			</div>

			<div className='mt-4 flex flex-col space-y-4 md:hidden'>
				{courses.map(course => (
					<CourseCard key={course.title} {...course} />
				))}
			</div>

			<Carousel
				opts={{ align: 'start' }}
				className='mt-6 hidden w-full md:flex'
			>
				<CarouselContent>
					{courses.map(course => (
						<CarouselItem
							key={course.title}
							className='md:basis-1/2 lg:basis-1/3'
						>
							<CourseCard {...course} />
						</CarouselItem>
					))}
				</CarouselContent>

				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	)
}

export default FeaturedCourses
