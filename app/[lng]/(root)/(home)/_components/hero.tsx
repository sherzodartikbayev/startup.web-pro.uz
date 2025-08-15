'use client'

import { Button } from '@/components/ui/button'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel'
import { companies } from '@/constants'
import useTranslate from '@/hooks/use-translate'
import Image from 'next/image'
import Link from 'next/link'
import Autoplay from 'embla-carousel-autoplay'

function Hero() {
	const t = useTranslate()

	return (
		<>
			<div className='container mx-auto grid min-h-[80vh] max-w-6xl grid-cols-2 gap-8 max-xl:px-5 max-md:grid-cols-1 max-md:pt-32'>
				<div className='flex flex-col space-y-4 self-center'>
					<h1 className='font-space-grotesk text-5xl font-bold'>
						{t('heroTitle')}{' '}
						<span className='text-blue-500'>{t('heroTitleSpan')}</span>
					</h1>
					<p className='text-muted-foreground'>{t('heroDescription')}</p>
					<div className='flex gap-4'>
						<Link href='/course'>
							<Button variant='outline' size='lg' rounded='full'>
								{t('findCourses')}
							</Button>
						</Link>
						<Link href='/course'>
							<Button size='lg' rounded='full'>
								{t('blogs')}
							</Button>
						</Link>
					</div>
				</div>

				<Image
					src='/assets/hero.png'
					alt='hero'
					width={520}
					height={520}
					className='self-end object-cover'
				/>
			</div>

			<div className='w-full bg-secondary'>
				<Carousel
					className='container mx-auto w-full max-w-6xl'
					opts={{
						align: 'start',
						loop: true,
					}}
					plugins={[
						Autoplay({
							delay: 2000,
						}),
					]}
				>
					<CarouselContent>
						{companies.map((Icon, index) => (
							<CarouselItem
								key={index}
								className='basis-1/3 md:basis-1/4 lg:basis-1/6'
							>
								<Icon className='h-24 w-full text-muted-foreground' />
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>
		</>
	)
}

export default Hero
