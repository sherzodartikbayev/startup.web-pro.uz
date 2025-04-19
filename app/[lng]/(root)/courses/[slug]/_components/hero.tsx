'use client'

import useTranslate from '@/hooks/use-translate'
import Image from 'next/image'
import ReactStars from 'react-stars'
import { PiStudentBold } from 'react-icons/pi'
import { Clock3 } from 'lucide-react'
 
const Hero = () => {
	const t = useTranslate()

	return (
		<>
			<h1 className='font-space-grotesk text-4xl font-bold'>
				React JS Full Course
			</h1>

			<p className='mt-4 text-muted-foreground'>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, magni
				ullam nostrum similique officia, quos voluptatum nemo ea minima sed
				eligendi soluta porro voluptates tenetur facilis maxime reprehenderit
				libero cum!
			</p>

			<div className='mt-4 flex flex-wrap items-center gap-6'>
				<div className='flex items-center gap-2'>
					<Image
						width={50}
						height={50}
						alt='author'
						src='https://us-west-2.graphassets.com/cm8t52inj0h8j07lqglqtbl6n/cm8u4we25absk08lskm98b6xr'
						className='rounded-full'
					/>
					<p className='font-space-grotesk font-bold'>Chris Impley</p>
				</div>

				<div className='flex items-center gap-2 font-space-grotesk'>
					<p className='font-bold text-[#E59819]'>4.5</p>
					<ReactStars value={4.5} edit={false} color2='#E59819' />
					<p className='font-bold'>(199)</p>
				</div>

				<div className='flex items-center gap-2'>
					<PiStudentBold className='size-6' />
					<p className='font-space-grotesk font-bold'>80 {t('students')}</p>
				</div>

				<div className='flex items-center gap-2'>
					<Clock3 className='size-6' />
					<p className='font-space-grotesk font-bold'>
						{t('lastUpdated')} 11/2023
					</p>
				</div>
			</div>
		</>
	)
}

export default Hero
