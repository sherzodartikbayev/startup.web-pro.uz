import type { Metadata } from 'next'
import './globals.css'
import { ChildProps } from '@/types'
import { Roboto, Space_Grotesk as SpaceGrotesk } from 'next/font/google'
import { ThemeProvider } from '@/components/providers/theme-provider'

const roboto = Roboto({
	subsets: ['latin', 'cyrillic'],
	weight: ['100', '300', '400', '500', '700', '900'],
	variable: '--font-roboto',
})

const spaceGrotesk = SpaceGrotesk({
	weight: ['300', '400', '500', '600', '700'],
	subsets: ['latin'],
	variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
	title: 'Start Up Praktikum - Next.js',
	description: "Sammi Praktikum's Next.js project",
	icons: { icon: '/logo.svg' },
}

function RootLayout({ children }: ChildProps) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${roboto.variable} ${spaceGrotesk.variable} overflow-x-hidden`}
				suppressHydrationWarning
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}

export default RootLayout
