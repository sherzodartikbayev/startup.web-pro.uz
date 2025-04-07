'use client'

import { useTranslation } from '@/i18n/client'
import { useParams } from 'next/navigation'

const HomePage = () => {
	const { lng } = useParams()
	const { t } = useTranslation(lng as string)

	return (
		<div className='mt-24'>{t('home')}</div>
	)
}

export default HomePage