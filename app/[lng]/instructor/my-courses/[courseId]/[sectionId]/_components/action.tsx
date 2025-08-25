'use client'

import { deleteSectionById } from '@/actions/section.action'
import { ISection } from '@/app.types'
import ConfirmDeleteModel from '@/components/modules/confirm-delete.modal'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

function Action(section: ISection) {
	const router = useRouter()

	const onDelete = () => {
		const path = `/en/instructor/my-courses/${section.course}`
		const promise = deleteSectionById(section._id, path).then(() =>
			router.push(path)
		)

		toast.promise(promise, {
			loading: 'Loading...',
			success: 'Successfully deleted!',
			error: 'Something went wrong!',
		})
	}

	return (
		<ConfirmDeleteModel onConfirm={onDelete}>
			<Button className='self-end' variant='destructive'>
				Delete
			</Button>
		</ConfirmDeleteModel>
	)
}

export default Action
