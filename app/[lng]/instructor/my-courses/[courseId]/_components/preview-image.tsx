'use client'

import { updateCourse } from '@/actions/course.action'
import { ICourse } from '@/app.types'
import FillLoading from '@/components/shared/fill-loading'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import useToggleEdit from '@/hooks/use-toggle-edit'
import { storage, bucketId, ID } from '@/lib/appwrite'
import { Edit2, X } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ChangeEvent, useState } from 'react'
import { toast } from 'sonner'

function PreviewImage(course: ICourse) {
	const { state, onToggle } = useToggleEdit()

	return (
		<Card>
			<CardContent className='relative p-6'>
				<div className='flex items-center justify-between'>
					<span className='text-lg font-medium'>Replace image</span>
					<Button size={'icon'} variant={'ghost'} onClick={onToggle}>
						{state ? <X /> : <Edit2 className='size-5' />}
					</Button>
				</div>
				<Separator className='my-3' />
				{state ? (
					<Forms course={course} onToggle={onToggle} />
				) : (
					<div className='relative h-72 w-full'>
						<Image
							src={course.previewImage}
							alt={course.title}
							fill
							className='rounded-sm object-cover'
						/>
					</div>
				)}
			</CardContent>
		</Card>
	)
}

export default PreviewImage

interface FormsProps {
	course: ICourse
	onToggle: () => void
}

function Forms({ course, onToggle }: FormsProps) {
	const [isLoading, setIsLoading] = useState(false)
	const pathname = usePathname()

	async function onUpload(e: ChangeEvent<HTMLInputElement>) {
		const files = e.target.files
		if (!files) return
		const file = files[0]

		setIsLoading(true)

		const promise = storage
			.createFile(bucketId, ID.unique(), file)
			.then(res => {
				const url = storage.getFileView(bucketId, res.$id)
				return updateCourse(course._id, { previewImage: url }, pathname)
			})
			.then(() => onToggle())
			.finally(() => setIsLoading(false))

		toast.promise(promise, {
			loading: 'Uploading...',
			success: 'Successfully updated!',
			error: 'Something went wrong!',
		})
	}

	return (
		<>
			{isLoading && <FillLoading />}
			<Input
				className='bg-secondary'
				type='file'
				accept='image/*'
				disabled={isLoading}
				onChange={onUpload}
			/>
		</>
	)
}
