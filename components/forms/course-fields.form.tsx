'use client'

import { courseSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '../ui/select'
import { courseCategory, courseLanguage, courseLevels } from '@/constants'
import { Button } from '../ui/button'

function CourseFieldsForm() {
	const form = useForm<z.infer<typeof courseSchema>>({
		resolver: zodResolver(courseSchema),
		defaultValues: defaultVal,
	})

	function onSubmit(values: z.infer<typeof courseSchema>) {
		console.log(values)
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-3'>
				<FormField
					control={form.control}
					name='title'
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								Course title<span className='text-red-500'>*</span>
							</FormLabel>
							<FormControl>
								<Input
									{...field}
									className='bg-secondary'
									placeholder='Learn ReactJS - from 0 to hero'
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='description'
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								Short description<span className='text-red-500'>*</span>
							</FormLabel>
							<FormControl>
								<Textarea
									{...field}
									className='h-44 bg-secondary'
									placeholder='Description'
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<div className='grid grid-cols-2 gap-4'>
					<FormField
						control={form.control}
						name='studentWillLearn'
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									What will students learn in your course?
									<span className='text-red-500'>*</span>
								</FormLabel>
								<FormControl>
									<Textarea {...field} className='bg-secondary' />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='requirements'
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									Requirements
									<span className='text-red-500'>*</span>
								</FormLabel>
								<FormControl>
									<Textarea {...field} className='bg-secondary' />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<div className='grid grid-cols-3 gap-4'>
					<FormField
						control={form.control}
						name='level'
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									Level<span className='text-red-500'>*</span>
								</FormLabel>
								<FormControl>
									<Select
										defaultValue={field.value}
										onValueChange={field.onChange}
									>
										<SelectTrigger className='w-full bg-secondary'>
											<SelectValue placeholder={'Select'} />
										</SelectTrigger>
										<SelectContent>
											{courseLevels.map(item => (
												<SelectItem key={item} value={item}>
													{item}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='category'
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									Category<span className='text-red-500'>*</span>
								</FormLabel>
								<FormControl>
									<Select
										defaultValue={field.value}
										onValueChange={field.onChange}
									>
										<SelectTrigger className='w-full bg-secondary'>
											<SelectValue placeholder={'Select'} />
										</SelectTrigger>
										<SelectContent>
											{courseCategory.map(item => (
												<SelectItem key={item} value={item}>
													{item}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='language'
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									Language<span className='text-red-500'>*</span>
								</FormLabel>
								<FormControl>
									<Select
										defaultValue={field.value}
										onValueChange={field.onChange}
									>
										<SelectTrigger className='w-full bg-secondary'>
											<SelectValue placeholder={'Select'} />
										</SelectTrigger>
										<SelectContent>
											{courseLanguage.map(item => (
												<SelectItem key={item} value={item}>
													{item}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<div className='grid grid-cols-2 gap-4'>
					<FormField
						control={form.control}
						name='oldPrice'
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									Old price<span className='text-red-500'>*</span>
								</FormLabel>
								<FormControl>
									<Input {...field} className='bg-secondary' type='number' />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='currentPrice'
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									Current Price<span className='text-red-500'>*</span>
								</FormLabel>
								<FormControl>
									<Input {...field} className='bg-secondary' type='number' />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<div className='flex justify-end gap-4'>
					<Button
						type='button'
						size={'lg'}
						variant={'destructive'}
						onClick={() => form.reset()}
					>
						Clear
					</Button>
					<Button type='submit' size={'lg'}>
						Submit
					</Button>
				</div>
			</form>
		</Form>
	)
}

export default CourseFieldsForm

const defaultVal = {
	title: '',
	description: '',
	studentWillLearn: '',
	requirements: '',
	level: '',
	category: '',
	language: '',
	oldPrice: '',
	currentPrice: '',
}
