import { getAdminReviews } from '@/actions/review.action'
import { SearchParamsProps } from '@/app.types'
import InstructorReviewCard from '@/components/cards/instructor-review.card'
import Header from '@/components/shared/header'
import Pagination from '@/components/shared/pagination'

async function Page({ searchParams }: SearchParamsProps) {
	const page = searchParams.page ? +searchParams.page : 1
	const reviewData = await getAdminReviews({ page, pageSize: 6 })

	return (
		<>
			<Header title='Reviews' description='Here are your latest reviews' />

			<div className='mt-4 rounded-md bg-background p-4'>
				<div className='flex flex-col space-y-3'>
					{reviewData.reviews.map(review => (
						<InstructorReviewCard
							key={review._id}
							review={JSON.parse(JSON.stringify(review))}
						/>
					))}
				</div>
			</div>

			<div className='my-6'>
				<Pagination pageNumber={page} isNext={reviewData.isNext} />
			</div>
		</>
	)
}

export default Page
