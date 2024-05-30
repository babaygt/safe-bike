'use client'

import Image from 'next/image'
import Link from 'next/link'

import { FaLinkedinIn, FaEnvelope } from 'react-icons/fa'

const members = [
	{
		name: 'Tuğçe Tamer',
		role: 'Designer',
		img: '/assets/images/team/tugce.png',
		email: 'tugce.tamer@code.berlin',
		linkedin: 'https://www.linkedin.com/in/tu%C4%9F%C3%A7etamer/',
	},
	{
		name: 'Yigit Baba',
		role: 'Software Developer',
		img: '/assets/images/team/yigit.png',
		email: 'yigit.baba@code.berlin',
		linkedin: 'https://www.linkedin.com/in/yigitbaba/',
	},
	{
		name: 'Shawn Gotoh',
		role: 'Software Developer',
		img: '/assets/images/team/shawn.png',
		email: 'shawn.gotoh@code.berlin',
		linkedin: 'https://www.linkedin.com',
	},
	{
		name: 'Maurice Hedfeld',
		role: 'Software Developer',
		img: '/assets/images/team/maurice.png',
		email: 'maurice.hedfeld@code.berlin',
		linkedin: 'https://www.linkedin.com/in/maurice-hedfeld-1a244b298/',
	},
	{
		name: 'Diego Pooth',
		role: 'Product Manager',
		img: '/assets/images/team/diego.png',
		email: 'diego.pooth@code.berlin',
		linkedin: 'https://www.linkedin.com',
	},
]

const Team = () => {
	return (
		<div className=' pt-4 pb-12 xl:pt-8 xl:pb-24'>
			<div className='pb-12 hover:scale-110 hover:transition-all ease-in-out duration-500'>
				<p className='text-lg p-3 bg-[#27272c] rounded-xl'>
					Safe Bike is driven by a team of{' '}
					<span className='text-accent'>dedicated professionals</span>: three{' '}
					<span className='text-accent'>software developers</span>, a{' '}
					<span className='text-accent'>designer</span>, and a{' '}
					<span className='text-accent'>product manager</span>. While we may not
					be avid cyclists, our{' '}
					<span className='text-accent'>collective expertise</span> in{' '}
					<span className='text-accent'>
						technology, design, and product management
					</span>{' '}
					enables us to create{' '}
					<span className='text-accent'>innovative solutions</span> that address
					the <span className='text-accent'>unique challenges</span> faced by
					urban cyclists. We work{' '}
					<span className='text-accent'>collaboratively</span> to ensure our
					platform meets the{' '}
					<span className='text-accent'>
						highest standards of safety and usability
					</span>
					.
				</p>
			</div>

			{/* Team members */}
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
				{members.map((member, index) => (
					<div
						key={index}
						className='w-full flex flex-col items-center gap-4 h-auto p-3 bg-[#232329] rounded-lg shadow-lg overflow-hidden hover:scale-110 hover:transition-all ease-in-out duration-500'
					>
						<div className='w-full h-auto flex flex-col items-center p-3'>
							<Image
								src={member.img}
								width={320}
								height={320}
								alt={member.name}
								className='object-center object-cover rounded-full'
							/>
						</div>
						<div className='text-center'>
							<h2 className='text-accent text-xl font-bold'>{member.name}</h2>
							<p className='text-white'>{member.role}</p>
						</div>
						<div className='flex gap-4'>
							<Link
								href={member.linkedin}
								className='w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'
							>
								<FaLinkedinIn />
							</Link>
							<Link
								href={`mailto:${member.email}`}
								className='w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'
							>
								<FaEnvelope />
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
export default Team
