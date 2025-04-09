'use client'

import useTranslate from '@/hooks/use-translate'
import { ILearningCard } from '@/types'
import Image from 'next/image'

const LearningCard = (journey: ILearningCard) => {
	const t = useTranslate()

	return (
		<div className='flex flex-col items-center justify-center rounded-md bg-primary p-6 text-center'>
			<Image src={journey.image} alt={journey.title} width={70} height={70} />
			<h2 className='mt-2 line-clamp-1 font-space-grotesk text-lg font-bold text-secondary'>
				{t(journey.title)}
			</h2>
			<p className='line-clamp-2 text-secondary'>{t(journey.excerpt)}</p>
		</div>
	)
}

export default LearningCard
