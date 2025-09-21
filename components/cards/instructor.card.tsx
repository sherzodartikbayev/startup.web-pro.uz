import { IUser } from '@/app.types'
import Image from 'next/image'

interface Props {
	instructor: IUser
}

function InstructorCard({ instructor }: Props) {
	return (
		<div className='flex flex-col space-y-1'>
			<div className='relative h-72 w-full'>
				<Image
					src={instructor.picture}
					alt={instructor.fullName}
					fill
					className='rounded-md object-cover'
				/>
			</div>
			<h1 className='font-space-grotesk text-2xl font-bold'>
				{instructor.fullName}
			</h1>
			<h3 className='font-medium text-muted-foreground'>{instructor.job}</h3>
		</div>
	)
}

export default InstructorCard
