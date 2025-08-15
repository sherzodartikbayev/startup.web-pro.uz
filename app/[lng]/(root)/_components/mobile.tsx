'use client'

import LanguageDropdown from '@/components/shared/language-dropdown'
import Logo from '@/components/shared/logo'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTrigger,
} from '@/components/ui/sheet'
import { navLinks } from '@/constants'
import useTranslate from '@/hook/use-translate'
import { AlignCenter, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import GlobalSearch from './global-search'
import ModeToggle from '@/components/shared/mode-toggle'

function Mobile() {
	const t = useTranslate()

	return (
		<Sheet>
			<SheetTrigger asChild className='md:hidden'>
				<Button size='icon' variant='ghost'>
					<AlignCenter />
				</Button>
			</SheetTrigger>
			<SheetContent side='top'>
				<SheetHeader>
					<Logo />
					<Separator />
				</SheetHeader>

				<div className='my-4 flex flex-col space-y-3'>
					{navLinks.map(nav => (
						<Link
							href={`/${nav.route}`}
							key={nav.route}
							className='flex h-12 cursor-pointer items-center gap-2 rounded-sm px-3 transition-colors hover:bg-blue-400/20'
						>
							<nav.icon className='size-5' />
							<span>{t(nav.name)}</span>
						</Link>
					))}
				</div>

				<LanguageDropdown isMobbile />

				<div className='mt-4 flex items-center justify-center gap-4'>
					<Button size='icon' variant='ghost'>
						<ShoppingCart />
					</Button>

					<GlobalSearch />

					<ModeToggle />
				</div>
			</SheetContent>
		</Sheet>
	)
}

export default Mobile
