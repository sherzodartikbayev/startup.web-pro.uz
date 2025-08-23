'use client'

import { ICourse } from '@/app.types'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import useToggleEdit from '@/hooks/use-toggle-edit'
import { BadgePlus, X } from 'lucide-react'

function Sections(course: ICourse) {
	const { state, onToggle } = useToggleEdit()

	return (
		<Card>
			<CardContent className='relative p-6'>
				<div className='flex items-center justify-between'>
					<span className='text-lg font-medium'>Sections</span>
					<Button size='icon' variant='ghost' onClick={onToggle}>
						{state ? <X /> : <BadgePlus />}
					</Button>
				</div>

				<Separator className='my-3' />
			</CardContent>
		</Card>
	)
}

export default Sections
