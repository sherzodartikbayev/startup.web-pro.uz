import TopBar from '@/components/shared/top-bar'
import AllCourse from './_components/all-course'
import { getAllCourse } from '@/actions/course.action'
import { SearchParamsProps } from '@/app.types'

async function Page({ searchParams }: SearchParamsProps) {
	const resultJSON = await getAllCourse({
		filter: searchParams.filter,
		searchQuery: searchParams.q,
		page: searchParams.page ? +searchParams.page : 1,
	})

	const result = JSON.parse(JSON.stringify(resultJSON))

	return (
		<div>
			<TopBar label='allCourses' description='allCourseDescription' />
			<AllCourse result={result} />
		</div>
	)
}

export default Page
