import { getAdminCourses } from '@/actions/course.action'
import { SearchParamsProps } from '@/app.types'
import AdminCourseCard from '@/components/cards/admin-course.card'
import Header from '@/components/shared/header'
import Pagination from '@/components/shared/pagination'

async function Page({ searchParams }: SearchParamsProps) {
	const page = searchParams.page ? +searchParams.page : 1
	const courseData = await getAdminCourses({ page, pageSize: 6 })

	return (
		<>
			<Header
				title='All Courses'
				description='Here are all the courses you have'
			/>

			<div className='mt-4 grid grid-cols-3 gap-4'>
				{courseData.courses.map(course => (
					<AdminCourseCard
						key={course._id}
						course={JSON.parse(JSON.stringify(course))}
					/>
				))}
			</div>

			<div className='mt-6'>
				<Pagination pageNumber={page} isNext={courseData.isNext} />
			</div>
		</>
	)
}

export default Page
