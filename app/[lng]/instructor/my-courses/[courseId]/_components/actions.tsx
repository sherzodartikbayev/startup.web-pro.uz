'use client'

import { deleteCourse, updateCourse } from '@/actions/course.action'
import { ICourse } from '@/app.types'
import ConfirmDeleteModel from '@/components/modules/confirm-delete.modal'
import { Button } from '@/components/ui/button'
import { usePathname, useRouter } from 'next/navigation'
import { toast } from 'sonner'

function Actions(course: ICourse) {
	const pathname = usePathname()
	const router = useRouter()

	const onUpdateStatus = () => {
		let promise

		if (course.published) {
			promise = updateCourse(course._id, { published: false }, pathname)
		} else {
			promise = updateCourse(course._id, { published: true }, pathname)
		}

		toast.promise(promise, {
			loading: 'Loading...',
			success: 'Successfully updated!',
			error: 'Something went wrong',
		})
	}

	const onDelete = () => {
		const promise = deleteCourse(course._id, '/en/instructor/my-courses').then(
			() => router.push('/en/instructor/my-courses')
		)

		toast.promise(promise, {
			loading: 'Loading...',
			success: 'Successfully 	deleted!',
			error: 'Something went wrong!',
		})
	}

	return (
		<div className='flex gap-2 self-end'>
			<Button onClick={onUpdateStatus}>
				{course.published ? 'Draft' : 'Published'}
			</Button>

			<ConfirmDeleteModel onConfirm={onDelete}>
				<Button variant='destructive'>Delete</Button>
			</ConfirmDeleteModel>
		</div>
	)
}

export default Actions
