'use client'

import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import useTranslate from '@/hooks/use-translate'
import { socialMediaSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

interface Props {
	onHandler: (values: z.infer<typeof socialMediaSchema>) => Promise<void>
}

function SecondForm({ onHandler }: Props) {
	const t = useTranslate()

	const form = useForm<z.infer<typeof socialMediaSchema>>({
		resolver: zodResolver(socialMediaSchema),
		defaultValues: {},
	})

	const onSubmit = (values: z.infer<typeof socialMediaSchema>) => {
		const promise = onHandler(values)

		toast.promise(promise, {
			loading: t('loading'),
			success: t('successfully'),
			error: t('error'),
		})
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='mt-4 space-y-3'>
				<FormField
					name='website'
					control={form.control}
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								Portfolio website <span className='text-red-500'>*</span>
							</FormLabel>
							<FormControl>
								<Input
									{...field}
									className='bg-primary/10'
									placeholder='https://www.web-pro.uz'
								/>
							</FormControl>
						</FormItem>
					)}
				/>

				<FormField
					name='linkedin'
					control={form.control}
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								LinkedIn <span className='text-red-500'>*</span>
							</FormLabel>
							<FormControl>
								<Input
									{...field}
									className='bg-primary/10'
									placeholder='https://linkedin.com/in/sherzodartikbayev/'
								/>
							</FormControl>
						</FormItem>
					)}
				/>

				<FormField
					name='github'
					control={form.control}
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								GitHub <span className='text-red-500'>*</span>
							</FormLabel>
							<FormControl>
								<Input
									{...field}
									className='bg-primary/10'
									placeholder='https://github.com/sherzodartikbayev'
								/>
							</FormControl>
						</FormItem>
					)}
				/>

				<FormField
					name='youtube'
					control={form.control}
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								Youtube <span className='text-red-500'>*</span>
							</FormLabel>
							<FormControl>
								<Input
									{...field}
									className='bg-primary/10'
									placeholder='https://www.youtube.com/'
								/>
							</FormControl>
						</FormItem>
					)}
				/>

				<Button className='w-fit' type='submit' size='sm'>
					<span>Next step</span>
				</Button>
			</form>
		</Form>
	)
}

export default SecondForm
