'use client'

import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import Link from 'next/link'
import Image from 'next/image'
import { Separator } from '@/components/ui/separator'
import Title from './about/components/Title'

export default function Home() {
	const links = [
		{
			href: '/map',
			title: 'Map Page',
			description:
				'Explore routes and navigate safely with our interactive map.',
		},
		{
			href: '/about',
			title: 'About',
			description:
				'Learn more about our mission and the team behind Safe Bike.',
		},
		{
			href: '/wallofthoughts',
			title: 'Wall of Thoughts',
			description:
				'Share your thoughts and ideas with the Safe Bike community.',
		},
		{
			href: '/contact',
			title: 'Contact',
			description:
				'Get in touch with us for more information or to get involved.',
		},
	]

	const featuresFirst = [
		{
			title: 'Safe Cycling Routes',
			description: 'Find the safest cycling routes in your area.',
		},
		{
			title: 'Weather Information',
			description: 'Get real-time weather updates for your route.',
		},
		{
			title: 'Voice-guided Navigation',
			description:
				'Turn-by-turn voice navigation to keep your hands on the handlebars.',
		},
	]

	const featuresSecond = [
		{
			title: 'Notifications',
			description: 'Receive important alerts and updates.',
		},
		{
			title: 'Real-time Road Alerts',
			description: 'Stay informed about road conditions and hazards.',
		},
		{
			title: 'Electric Bike Charging Points',
			description: 'Locate nearby electric bike charging stations.',
		},
	]

	const featuresThird = [
		{
			title: 'Secondhand Bicycle Shops',
			description: 'Find shops that sell secondhand bicycles.',
		},
		{
			title: 'Bicycle Repair Shops',
			description: 'Locate repair shops near you for quick fixes.',
		},
		{
			title: 'Data Privacy',
			description: 'Your data is secure with us. We prioritize your privacy.',
		},
	]

	return (
		<div>
			<section className='container mx-auto py-20 min-h-screen'>
				<Separator className='bg-accent' />
				<div className='w-full text-center '>
					<TypeAnimation
						sequence={[
							500,
							'The Future of Cycle Safety',
							1000,
							'Navigate Safely with Safe Bike',
							1000,
							'Discover the Best Routes',
							1000,
							'Join the Cycling Community',
							1000,
							'Stay Updated with Real-Time Alerts',
							500,
						]}
						wrapper='span'
						cursor={true}
						repeat={Infinity}
						style={{
							fontSize: '3em',
							display: 'block',
							color: '#00ff99',
						}}
					/>
				</div>
				<Separator className='bg-accent' />

				<Title text='Surf the site freely' size='text-3xl' position='center' />

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-4 pb-12 xl:pt-8 xl:pb-24'>
					{links.map((link, index) => (
						<Link key={index} href={link.href}>
							<div className='bg-[#27272c] p-6 h-auto lg:h-64 rounded-xl text-center hover:scale-105 transition transform duration-500'>
								<h2 className='text-2xl text-accent font-bold mb-4'>
									{link.title}
								</h2>
								<p className='text-white'>{link.description}</p>
							</div>
						</Link>
					))}
				</div>

				<Title
					text='Want to explore the App?'
					size='text-3xl'
					position='center'
				/>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4 pb-12 xl:pt-8 xl:pb-24'>
					{featuresFirst.map((feature, index) => (
						<div
							key={index}
							className='bg-[#27272c] p-6 h-auto rounded-xl text-center hover:scale-105 transition transform duration-500'
						>
							<h2 className='text-2xl text-accent font-bold mb-4'>
								{feature.title}
							</h2>
							<p className='text-white'>{feature.description}</p>
						</div>
					))}
				</div>

				<div className='flex flex-col lg:flex-row'>
					<div className='w-full md:w-1/2 px-6 '>
						<div className='relative w-full h-full hover:scale-110 hover:transition-all ease-in-out duration-500'>
							<Image
								src='/assets/images/home-page/homepage-1.png'
								priority
								quality={100}
								width={500}
								height={500}
								alt=''
							/>
						</div>
					</div>
					<div className='w-full md:w-1/2 px-6'>
						<div className='relative w-full h-full hover:scale-110 hover:transition-all ease-in-out duration-500'>
							<Image
								src='/assets/images/home-page/homepage-2.png'
								priority
								quality={100}
								width={500}
								height={500}
								alt=''
							/>
						</div>
					</div>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4 pb-12 xl:pt-8 xl:pb-24'>
					{featuresSecond.map((feature, index) => (
						<div
							key={index}
							className='bg-[#27272c] p-6 h-auto rounded-xl text-center hover:scale-105 transition transform duration-500'
						>
							<h2 className='text-2xl text-accent font-bold mb-4'>
								{feature.title}
							</h2>
							<p className='text-white'>{feature.description}</p>
						</div>
					))}
				</div>

				<div className='flex flex-col lg:flex-row'>
					<div className='w-full md:w-1/2 px-6'>
						<div className='relative w-full h-full hover:scale-110 hover:transition-all ease-in-out duration-500'>
							<Image
								src='/assets/images/home-page/homepage-3.png'
								priority
								quality={100}
								width={500}
								height={500}
								alt=''
							/>
						</div>
					</div>
					<div className='w-full md:w-1/2 px-6'>
						<div className='relative w-full h-full hover:scale-110 hover:transition-all ease-in-out duration-500'>
							<Image
								src='/assets/images/home-page/homepage-4.png'
								priority
								quality={100}
								width={500}
								height={500}
								alt=''
							/>
						</div>
					</div>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4 pb-12 xl:pt-8 xl:pb-24'>
					{featuresThird.map((feature, index) => (
						<div
							key={index}
							className='bg-[#27272c] p-6 h-auto rounded-xl text-center hover:scale-105 transition transform duration-500'
						>
							<h2 className='text-2xl text-accent font-bold mb-4'>
								{feature.title}
							</h2>
							<p className='text-white'>{feature.description}</p>
						</div>
					))}
				</div>

				<div className='flex flex-col lg:flex-row'>
					<div className='w-full md:w-1/2 px-6'>
						<div className='relative w-full h-full hover:scale-110 hover:transition-all ease-in-out duration-500'>
							<Image
								src='/assets/images/home-page/homepage-5.png'
								priority
								quality={100}
								width={500}
								height={500}
								alt=''
							/>
						</div>
					</div>
					<div className='w-full md:w-1/2 px-6'>
						<div className='relative w-full h-full hover:scale-110 hover:transition-all ease-in-out duration-500'>
							<Image
								src='/assets/images/home-page/homepage-6.png'
								priority
								quality={100}
								width={500}
								height={500}
								alt=''
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
