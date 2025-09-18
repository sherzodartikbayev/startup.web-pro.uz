import { getWishlist } from '@/actions/course.action'
import CourseCard from '@/components/cards/course.card'
import Header from '@/components/shared/header'
import NoResult from '@/components/shared/no-result'
import { translation } from '@/i18n/server'
import { LngParams } from '@/types'
import { auth } from '@clerk/nextjs'

async function Page({ params: { lng } }: LngParams) {
	const { userId } = auth()
	const { t } = await translation(lng)
	const courses = await getWishlist(userId!)

	return (
		<>
			<Header title={t('wishlist')} description={t('wishlistDescription')} />

			{courses.length === 0 && (
				<NoResult
					title={t('noWishlist')}
					description={t('noWishlistDescription')}
				/>
			)}

			<div className='mt-4 grid grid-cols-3 gap-4 max-md:grid-cols-1'>
				{courses.map(course => {
					const data = JSON.parse(JSON.stringify(course))
					return <CourseCard key={course.id} {...data} />
				})}
			</div>
		</>
	)
}

export default Page
