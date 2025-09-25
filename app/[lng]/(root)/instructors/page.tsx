import { getAdminInstructors } from '@/actions/user.action'
import { SearchParamsProps } from '@/app.types'
import InstructorCard from '@/components/cards/instructor.card'
import Pagination from '@/components/shared/pagination'
import TopBar from '@/components/shared/top-bar'

async function Page({ searchParams }: SearchParamsProps) {
	const page = searchParams.page ? +searchParams.page : 1
	const instructorData = await getAdminInstructors({ page, pageSize: 6 })

	return (
		<>
			<TopBar
				label='All Instructors'
				description='View all instructors and their courses. This is the list of all instructors.'
			/>

			<div className='container mx-auto mt-12 max-w-6xl'>
				<div className='mt-4 grid grid-cols-4 gap-4'>
					{instructorData.instructors.map(instructor => (
						<InstructorCard
							key={instructor._id}
							instructor={JSON.parse(JSON.stringify(instructor))}
						/>
					))}
				</div>

				<div className='mt-4'>
					<Pagination pageNumber={page} isNext={instructorData.isNext} />
				</div>
			</div>
		</>
	)
}

export default Page
