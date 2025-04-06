import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '../ui/button'
import { Languages } from 'lucide-react'
import Image from 'next/image'
import { langs } from '@/constants'

function LanguageDropdown() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant={'ghost'} size={'icon'}>
					<Languages />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-56'>
				<DropdownMenuGroup>
						{langs.map(item => (
							<DropdownMenuItem key={item.route} className='cursor-pointer'>
							<Image
							src={`/assets/locales/${item.route}.png`}
							alt={item.label}
							width={30}
							height={30}
						/>
						<span className='font-space-grotesk font-medium'>{item.label}</span>
					</DropdownMenuItem>
						))}
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default LanguageDropdown
