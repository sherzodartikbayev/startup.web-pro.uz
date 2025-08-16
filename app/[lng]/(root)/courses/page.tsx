import TopBar from '@/components/shared/top-bar'
import AllCourse from './_components/all-course'

function Page() {
	return (
		<div>
			<TopBar label='allCourses' description='allCourseDescription' />
			<AllCourse />
		</div>
	)
}

export default Page
