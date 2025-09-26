'use client'

import FillLoading from '@/components/shared/fill-loading'
import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { useState } from 'react'
import FirstForm from './first-form'
import { z } from 'zod'
import {
	basicInstructorSchema,
	bioSchema,
	socialMediaSchema,
} from '@/lib/validation'
import { updateUser } from '@/actions/user.action'
import { useAuth } from '@clerk/nextjs'
import SecondForm from './second-form'
import ThirdForm from './third-form'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import useTranslate from '@/hooks/use-translate'

function InstructorForm() {
	const [progress, setProgress] = useState(33)
	const [step, setStep] = useState(1)
	const [loading, setLoading] = useState(false)
	const { userId } = useAuth()
	const t = useTranslate()

	const firstForm = () => {
		const onSubmit = async (values: z.infer<typeof basicInstructorSchema>) => {
			setLoading(false)
			const data = { fullName: values.name, phone: values.phone }

			return updateUser({ clerkId: userId!, updatedData: data })
				.then(() => {
					setProgress(66)
					setStep(2)
				})
				.finally(() => setLoading(false))
		}

		return (
			<>
				<h2 className='font-space-grotesk text-xl font-bold'>
					{t('basicInformation')}
				</h2>

				<p className='text-xs text-muted-foreground'>
					{t('basicInformationDescription')}
				</p>

				<FirstForm onHandler={onSubmit} />
			</>
		)
	}

	const secondForm = () => {
		const onSubmit = async (values: z.infer<typeof socialMediaSchema>) => {
			setLoading(false)

			return updateUser({ clerkId: userId!, updatedData: values })
				.then(() => {
					setProgress(100)
					setStep(3)
				})
				.finally(() => setLoading(false))
		}

		return (
			<>
				<h2 className='font-space-grotesk text-xl font-bold'>
					{t('socialMedia')}
				</h2>

				<p className='text-xs text-muted-foreground'>
					{t('basicInformationDescription')}
				</p>

				<SecondForm onHandler={onSubmit} />
			</>
		)
	}

	const thirdForm = () => {
		const onSubmit = async (values: z.infer<typeof bioSchema>) => {
			setLoading(false)

			return updateUser({
				clerkId: userId!,
				updatedData: { ...values, approvedInstructor: true },
			})
				.then(() => setStep(4))
				.finally(() => setLoading(false))
		}

		return (
			<>
				<h2 className='font-space-grotesk text-xl font-bold'>
					{t('bioAndProfile')}
				</h2>

				<p className='text-xs text-muted-foreground'>
					{t('basicInformationDescription')}
				</p>

				<ThirdForm onHandler={onSubmit} />
			</>
		)
	}

	const submissionContent = () => {
		return (
			<div className='flex flex-col items-center justify-center'>
				<Image
					src={'/assets/success.png'}
					alt='success'
					width={200}
					height={200}
					className='text-center'
				/>
				<h1 className='font-space-grotesk text-xl font-bold'>
					{t('thanksSubmission')}
				</h1>
				<p className='text-center text-xs text-muted-foreground'>
					{t('thanksSubmissionDescription1')}
				</p>
				<p className='text-center text-xs text-muted-foreground'>
					{t('thanksSubmissionDescription2')}
				</p>
				<Button className='mt-2' asChild>
					<Link href={'/profile/notifications'}>
						<span>{t('notification')}</span>
					</Link>
				</Button>
			</div>
		)
	}

	return (
		<Card className='relative bg-gradient-to-b from-background via-secondary to-background'>
			{loading && <FillLoading />}

			<CardContent className='py-2'>
				{step !== 4 && (
					<>
						<Progress value={progress} />
						<div className='my-2 grid grid-cols-3'>
							<div className=''></div>
							<div className='text-center font-space-grotesk font-bold'>
								{step}/3
							</div>
							<div />
						</div>
					</>
				)}

				{step === 1 && firstForm()}
				{step === 2 && secondForm()}
				{step === 3 && thirdForm()}
				{step === 4 && submissionContent()}
			</CardContent>
		</Card>
	)
}

export default InstructorForm
