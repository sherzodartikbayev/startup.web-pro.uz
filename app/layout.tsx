import { ChildProps } from '@/types'
import type { Metadata } from 'next'
import './globals.css'
import { Roboto, Space_Grotesk as SpaceGrotesk } from 'next/font/google'

const roboto = Roboto({
	subsets: ['latin', 'cyrillic'],
	weight: ['100', '300', '400', '500', '700', '900'],
	variable: '--font-roboto',
})

const spaceGrotesk = SpaceGrotesk({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
	variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
	title: 'Startup Praktikum - Next.js',
	description: "Startup Praktikum's Next.js project",
}

export default function RootLayout({ children }: ChildProps) {
	return (
		<html lang='en'>
			<body
				className={`${roboto.variable} ${spaceGrotesk.variable} overflow-x-hidden`}
			>
				{children}
			</body>
		</html>
	)
}
