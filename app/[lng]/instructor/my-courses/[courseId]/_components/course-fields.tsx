import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Edit2 } from 'lucide-react'

function CourseFields() {
	return (
		<Card>
			<CardContent className='relative p-6'>
				<div className='flex items-center justify-between'>
					<span className='text-lg font-medium'>Course Title</span>
					<Button size='icon' variant='ghost'>
						<Edit2 />
					</Button>
				</div>

				<Separator className='my-3' />
			</CardContent>
		</Card>
	)
}

export default CourseFields
