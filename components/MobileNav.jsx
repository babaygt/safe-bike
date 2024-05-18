'use client'

import { useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { CiMenuFries } from 'react-icons/ci'

const links = [
	{ name: 'home', path: '/' },
	{ name: 'map', path: '/map' },
	{ name: 'about', path: '/about' },
	{ name: 'wall of thoughts', path: '/wallofthoughts' },
	{ name: 'contact', path: '/contact' },
]

const MobileNav = () => {
	const [isOpen, setIsOpen] = useState(false)
	const pathname = usePathname()

	const closeSheet = () => {
		setIsOpen(false)
	}

	return (
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
			<SheetTrigger asChild>
				<button
					onClick={() => setIsOpen(!isOpen)}
					className='flex justify-center items-center'
				>
					<CiMenuFries className='text-2xl text-accent' />
				</button>
			</SheetTrigger>
			<SheetContent className='flex flex-col'>
				{/** Logo */}
				<div className='mt-12 mb-8 text-center text-2xl'>
					<Link href='/'>
						<h1 className='text-4xl font-semibold'>
							Safe <span className='text-accent'>Bike</span>
						</h1>
					</Link>
				</div>
				{/** Nav */}
				<nav className='flex flex-col justify-center items-center gap-8'>
					{links.map((link, index) => (
						<Link
							href={link.path}
							key={index}
							className={`${
								link.path === pathname && 'text-accent border-b-2 border-accent'
							} text-xl capitalize hover:text-accent transition-all`}
							onClick={closeSheet}
						>
							{link.name}
						</Link>
					))}
				</nav>
			</SheetContent>
		</Sheet>
	)
}

export default MobileNav
