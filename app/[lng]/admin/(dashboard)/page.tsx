import { getAdminCourses } from '@/actions/course.action'
import { getAdminReviews } from '@/actions/review.action'
import { getAdminInstructors, getBalance } from '@/actions/user.action'
import AdminCourseCard from '@/components/cards/admin-course.card'
import InstructorReviewCard from '@/components/cards/instructor-review.card'
import InstructorCard from '@/components/cards/instructor.card'
import StatisticsCard from '@/components/cards/statistics.card'
import Header from '@/components/shared/header'
import { MessageSquare, MonitorPlay, User } from 'lucide-react'
import { GrMoney } from 'react-icons/gr'

async function Page() {
	const courseData = await getAdminCourses({})
	const reviewData = await getAdminReviews({})
	const instructorData = await getAdminInstructors({})
	const balance = await getBalance()

	return (
		<>
			{/* Dashboard */}
			<Header title='Dashboard' description='Welcome to your Dashboard' />

			<div className='mt-4 grid grid-cols-4 gap-4'>
				<StatisticsCard
					label='All Courses'
					value={`${courseData.totalCourses}`}
					Icon={MonitorPlay}
				/>
				<StatisticsCard
					label='Reviews'
					value={`${reviewData.totalReviews}`}
					Icon={MessageSquare}
				/>
				<StatisticsCard
					label='Total Sales'
					value={`${(balance / 100).toLocaleString('en-US', {
						style: 'currency',
						currency: 'usd',
					})}`}
					Icon={GrMoney}
				/>
				<StatisticsCard
					label='Instructors'
					value={`${instructorData.totalInstructors}`}
					Icon={User}
				/>
			</div>

			{/* All Courses */}
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

			{/* Reviews */}
			<Header title='Reviews' description='Here are your latest reviews' />

			<div className='mt-4 grid grid-cols-3 gap-4'>
				{reviewData.reviews.map(review => (
					<InstructorReviewCard
						key={review._id}
						review={JSON.parse(JSON.stringify(review))}
						isAdmin
					/>
				))}
			</div>

			{/* Instructors */}
			<Header title='Instructors' description='Here are your instructors' />

			<div className='mt-4 grid grid-cols-3 gap-4'>
				{instructorData.instructors.map(instructor => (
					<InstructorCard
						key={instructor._id}
						instructor={JSON.parse(JSON.stringify(instructor))}
					/>
				))}
			</div>
		</>
	)
}

export default Page
