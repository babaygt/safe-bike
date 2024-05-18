import Link from 'next/link'

// components
import Navigation from './Navigation'
import MobileNav from './MobileNav'

const Header = () => {
	return (
		<header className='py-8 xl:py-12 text-white'>
			<div className='container mx-auto flex justify-between items-center'>
				{/* logo */}
				<Link href='/'>
					<h1 className='text-4xl font-semibold'>
						Safe <span className='text-accent'>Bike</span>
					</h1>
				</Link>
				{/* desktop nav */}
				<div className='hidden xl:flex items-center gap-8'>
					<Navigation />
				</div>

				{/* mobile nav */}
				<div className='xl:hidden'>
					<MobileNav />
				</div>
			</div>
		</header>
	)
}
export default Header
