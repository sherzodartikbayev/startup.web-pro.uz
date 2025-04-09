'use client'

import { learningJourney } from '@/constants'
import useTranslate from '@/hooks/use-translate'

const LearningJourney = () => {
	const t = useTranslate()

	return (
		<div className='container mx-auto max-w-6xl py-24'>
			<h1 className='text-center font-space-grotesk text-2xl font-bold'>
				{t('learnJourney')}
			</h1>
			<p className='mx-auto max-w-6xl text-center text-sm text-muted-foreground'>
				{t('learnJourneyDescription')}
			</p>

			<div className='mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
				{learningJourney.map(item => (
					<LearningJourney key={item.title} {...item} />
				))}
			</div>
		</div>
	)
}

export default LearningJourney
