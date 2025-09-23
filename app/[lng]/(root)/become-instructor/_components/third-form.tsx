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
import { Textarea } from '@/components/ui/textarea'
import useTranslate from '@/hooks/use-translate'
import { bioSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

interface Props {
	onHandler: (values: z.infer<typeof bioSchema>) => Promise<void>
}

function ThirdForm({ onHandler }: Props) {
	const t = useTranslate()

	const form = useForm<z.infer<typeof bioSchema>>({
		resolver: zodResolver(bioSchema),
		defaultValues: {},
	})

	const onSubmit = (values: z.infer<typeof bioSchema>) => {
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
					name='job'
					control={form.control}
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								Your Profession <span className='text-red-500'>*</span>
							</FormLabel>
							<FormControl>
								<Input
									{...field}
									className='bg-primary/10'
									placeholder='Full-Stack Developer'
								/>
							</FormControl>
						</FormItem>
					)}
				/>

				<FormField
					name='bio'
					control={form.control}
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								Bio <span className='text-red-500'>*</span>
							</FormLabel>
							<FormControl>
								<Textarea
									{...field}
									className='h-32 resize-none bg-primary/10'
									placeholder='Tell us about yourself'
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

export default ThirdForm
