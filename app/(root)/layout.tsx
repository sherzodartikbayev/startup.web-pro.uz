import { ChildProps } from '@/types'
import Navbar from './_components/navbar'
import Footer from './_components/footer'

const Layout = ({ children }: ChildProps) => {
	return (
		<div>
			<Navbar />
			<main className=''>{children}</main>
			<Footer />
		</div>
	)
}

export default Layout
