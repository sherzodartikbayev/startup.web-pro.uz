'use client'

import { Button } from '@/components/ui/button'
import { shareBtns } from '@/constants'
import { usePathname } from 'next/navigation'
import { toast } from 'sonner'

function ShareBtns() {
	const pathname = usePathname()

	const onCopy = () => {
		const link = process.env.NEXT_PUBLIC_BASE_URL + pathname
		navigator.clipboard
			.writeText(link)
			.then(() => toast.success('Copied to clipboard'))
	}

	return (
		<div className='mt-4 flex flex-col max-md:flex-row max-md:space-x-3 md:space-y-3'>
			{shareBtns.map((Icon, index) => (
				<Button key={index} size={'icon'} variant={'outline'} onClick={onCopy}>
					<Icon />
				</Button>
			))}
		</div>
	)
}

export default ShareBtns
