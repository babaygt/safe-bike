'use client'

import Image from 'next/image'

import Title from './Title'

const SafeBikeWebsite = () => {
	return (
		<div className='pt-4 pb-12 xl:pt-8 xl:pb-24 '>
			<Title
				text='Safe Bike Website'
				position='left'
				size='text-2xl lg:text-3xl xl:text-4xl font-bold'
				color='text-accent'
			/>

			{/* Two equal column one for text one for image */}
			<Title
				text='Interactive Map'
				position='left'
				size='text-xl lg:text-2xl xl:text-3xl font-bold'
				color='text-[#FFEA00]'
			/>
			<div className='flex flex-col lg:flex-row items-center justify-center gap-8 xl:pt-8 xl:pb-24'>
				<div className='w-full xl:w-1/2'>
					<ul className='grid grid-cols-1 gap-[30px]'>
						<li className='bg-[#232329] h-auto xl:h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 md:hover:scale-[1.03] xl:hover:scale-110 hover:transition-all ease-in-out duration-500'>
							<span className='text-[#FFEA00] font-bold'>Route Creation</span>
							<p className='text-white'>
								Users can create{' '}
								<span className='text-accent'>personalized cycling routes</span>{' '}
								tailored to their{' '}
								<span className='text-accent'>preferences and needs</span>.
							</p>
						</li>
						<li className='bg-[#232329] h-auto xl:h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 md:hover:scale-[1.03] xl:hover:scale-110 hover:transition-all ease-in-out duration-500'>
							<span className='text-[#FFEA00] font-bold'>Safety Features</span>
							<p className='text-white'>
								The map highlights{' '}
								<span className='text-accent'>crash sites</span>,{' '}
								<span className='text-accent'>construction zones</span>, and{' '}
								<span className='text-accent'>bicycle stores</span>, providing
								critical information to avoid{' '}
								<span className='text-accent'>potential hazards</span>.
							</p>
						</li>
						<li className='bg-[#232329] h-auto xl:h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 md:hover:scale-[1.03] xl:hover:scale-110 hover:transition-all ease-in-out duration-500'>
							<span className='text-[#FFEA00] font-bold'>
								Real-Time Updates
							</span>
							<p className='text-white'>
								Stay informed with{' '}
								<span className='text-accent'>live updates</span> on{' '}
								<span className='text-accent'>traffic conditions</span> and{' '}
								<span className='text-accent'>safety alerts</span>.
							</p>
						</li>
					</ul>
				</div>

				<div className='w-full xl:w-1/2  px-6'>
					<div className='relative w-full h-full md:hover:scale-[1.03] xl:hover:scale-110 hover:transition-all ease-in-out duration-500'>
						<Image
							src='/assets/images/website/website-safebike-map-1.png'
							priority
							quality={100}
							width={500}
							height={500}
							alt=''
						/>
					</div>
				</div>
			</div>

			<Title
				text='Wall of Thoughts'
				size='text-xl lg:text-2xl xl:text-3xl font-bold'
				color='text-[#FFEA00]'
				position='right'
			/>

			<div className='flex flex-col lg:flex-row items-center justify-center gap-8 xl:pt-8 xl:pb-24'>
				<div className='w-full order-2 lg:order-1  xl:w-1/2   px-6'>
					<div className='relative w-full h-full md:hover:scale-[1.03] xl:hover:scale-110 hover:transition-all ease-in-out duration-500'>
						<Image
							src='/assets/images/website/website-wallofthoughts-1.png'
							priority
							quality={100}
							width={500}
							height={500}
							alt=''
						/>
					</div>
				</div>
				<div className='w-full xl:w-1/2 order-1 lg:order-2 '>
					<ul className='grid grid-cols-1 gap-[30px]'>
						<li className='bg-[#232329] h-auto xl:h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 md:hover:scale-[1.03] xl:hover:scale-110 hover:transition-all ease-in-out duration-500'>
							<span className='text-[#FFEA00] font-bold'>
								Community Engagement
							</span>
							<p className='text-white'>
								A platform where cyclists can share their{' '}
								<span className='text-accent'>thoughts</span>,{' '}
								<span className='text-accent'>suggestions</span>, and{' '}
								<span className='text-accent'>experiences</span>.
							</p>
						</li>
						<li className='bg-[#232329] h-auto xl:h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 md:hover:scale-[1.03] xl:hover:scale-110 hover:transition-all ease-in-out duration-500'>
							<span className='text-[#FFEA00] font-bold'>
								Feedback Integration
							</span>
							<p className='text-white'>
								We actively listen to our users and incorporate their{' '}
								<span className='text-accent'>feedback</span> to{' '}
								<span className='text-accent'>improve our services</span>{' '}
								continuously.
							</p>
						</li>
						<li className='bg-[#232329] h-auto xl:h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 md:hover:scale-[1.03] xl:hover:scale-110 hover:transition-all ease-in-out duration-500'>
							<span className='text-[#FFEA00] font-bold'>Open Discussion</span>
							<p className='text-white'>
								Encourage <span className='text-accent'>open discussions</span>{' '}
								on <span className='text-accent'>cycling safety</span>,{' '}
								<span className='text-accent'>route recommendations</span>, and{' '}
								<span className='text-accent'>community events</span>.
							</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
export default SafeBikeWebsite
