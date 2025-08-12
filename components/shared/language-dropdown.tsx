'use client'

import {
	DropdownMenu,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu'
import { Button } from '../ui/button'
import { Languages } from 'lucide-react'
import { DropdownMenuContent, DropdownMenuGroup } from '../ui/dropdown-menu'
import Image from 'next/image'
import { lngs } from '@/constants'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { useParams } from 'next/navigation'

function LanguageDropdown() {
	const { lng } = useParams()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='ghost' size='icon'>
					<Languages />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-56'>
				<DropdownMenuGroup>
					{lngs.map(item => (
						<Link href={`/${item.route}`} key={item.route}>
							<DropdownMenuItem
								className={cn(
									'flex cursor-pointer p-2 hover:bg-secondary',
									lng === item.route && 'bg-secondary'
								)}
							>
								<Image
									src={`/assets/locales/${item.route}.png`}
									alt={item.label}
									width={30}
									height={30}
								/>
								<span className='ml-2 font-space-grotesk font-medium'>
									{item.label}
								</span>
							</DropdownMenuItem>
						</Link>
					))}
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default LanguageDropdown
