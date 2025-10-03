import { ChildProps } from '@/types'
import Navbar from '../(root)/_components/navbar'

function Layout({ children }: ChildProps) {
	return (
		<main>
			<Navbar />
			<div className='flex'>
				<section className='flex min-h-screen flex-1 flex-col items-center justify-center pt-24 max-md:pb-14'>
					{children}
				</section>
			</div>
		</main>
	)
}

export default Layout
