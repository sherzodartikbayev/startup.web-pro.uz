'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { Moon, Sun } from 'lucide-react'

function ModeToggle() {
	const [mount, setMount] = useState(false)
	const { setTheme, resolvedTheme } = useTheme()

	useEffect(() => setMount(true), [])

	return mount && resolvedTheme === 'dark' ? (
		<Button size={'icon'} onClick={() => setTheme('ligth')} variant={'ghost'}>
			<Sun />
		</Button>
	) : (
		<Button size={'icon'} onClick={() => setTheme('dark')} variant={'ghost'}>
			<Moon />
		</Button>
	)
}

export default ModeToggle
