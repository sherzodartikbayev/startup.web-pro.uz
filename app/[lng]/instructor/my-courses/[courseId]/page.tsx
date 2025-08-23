import { getCourseById } from '@/actions/course.action'
import { IInstructorMyCourseDetail } from '@/types'
import Header from '../../_components/header'
import Actions from './_components/actions'
import { Separator } from '@/components/ui/separator'
import { Settings } from 'lucide-react'
import CourseFields from './_components/course-fields'

async function Page({ params: { courseId } }: IInstructorMyCourseDetail) {
	const courseJSON = await getCourseById(courseId)
	const course = JSON.parse(JSON.stringify(courseJSON))

	return (
		<>
			<div className='flex items-center justify-between'>
				<Header
					title={course.title}
					description='Manage your course and see how it is performing.'
				/>
				<Actions {...course} />
			</div>

			<Separator className='my-3 bg-muted-foreground' />

			<div className='mt-6 grid grid-cols-2 gap-4'>
				<div className='flex flex-col space-y-2'>
					<div className='flex items-center gap-2'>
						<span className='font-space-grotesk text-3xl font-medium'>
							Course Fields
						</span>{' '}
						<Settings />
					</div>

					<CourseFields />
				</div>
				<div className='flex flex-col space-y-2'></div>
			</div>
		</>
	)
}

export default Page
