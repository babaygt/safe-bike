'use client'

import Image from 'next/image'
import Title from './Title'

const SafeBikeApp = () => {
	const group1 = [
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

	const group2 = [
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

	const group3 = [
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
		<div className='pt-4 pb-12 xl:pt-8 xl:pb-24'>
			<Title
				text='Safe Bike Mobile App'
				position='left'
				size='text-2xl lg:text-3xl xl:text-4xl font-bold'
				color='text-accent'
			/>

			{/* Group 1 */}
			<Title
				text='Navigation and Safety'
				position='left'
				size='text-xl lg:text-2xl xl:text-3xl font-bold'
				color='text-[#FFEA00]'
			/>
			<div className='flex flex-col md:flex-row items-center justify-center gap-8 xl:pt-8 xl:pb-24'>
				<div className='w-full xl:w-1/2'>
					<ul className='grid grid-cols-1 gap-[30px]'>
						{group1.map((feature, index) => (
							<li
								key={index}
								className='bg-[#232329] h-auto xl:h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 hover:scale-110 hover:transition-all ease-in-out duration-500'
							>
								<span className='text-[#FFEA00] font-bold'>
									{feature.title}
								</span>
								<p className='text-white'>{feature.description}</p>
							</li>
						))}
					</ul>
				</div>
				<div className='w-full xl:w-1/2  px-6'>
					<div className='relative w-full h-full hover:scale-110 hover:transition-all ease-in-out duration-500'>
						<Image
							src='/assets/images/mobile-app/safe-bike-app-1.png'
							priority
							quality={100}
							width={500}
							height={500}
							alt=''
						/>
					</div>
				</div>
			</div>

			{/* Group 2 */}
			<Title
				text='Alerts and Services'
				position='right'
				size='text-xl lg:text-2xl xl:text-3xl font-bold'
				color='text-[#FFEA00]'
			/>

			<div className='flex flex-col md:flex-row items-center justify-center gap-8 xl:pt-8 xl:pb-24'>
				<div className='w-full order-2 lg:order-1  xl:w-1/2   px-6'>
					<div className='relative w-full h-full hover:scale-110 hover:transition-all ease-in-out duration-500'>
						<Image
							src='/assets/images/mobile-app/safe-bike-app-2.png'
							priority
							quality={100}
							width={500}
							height={500}
							alt=''
						/>
					</div>
				</div>
				<div className='w-full xl:w-1/2 order-1 lg:order-2'>
					<ul className='grid grid-cols-1 gap-[30px]'>
						{group2.map((feature, index) => (
							<li
								key={index}
								className='bg-[#232329] h-auto xl:h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 hover:scale-110 hover:transition-all ease-in-out duration-500'
							>
								<span className='text-[#FFEA00] font-bold'>
									{feature.title}
								</span>
								<p className='text-white'>{feature.description}</p>
							</li>
						))}
					</ul>
				</div>
			</div>

			{/* Group 3 */}
			<Title
				text='Shops and Privacy'
				position='left'
				size='text-xl lg:text-2xl xl:text-3xl font-bold'
				color='text-[#FFEA00]'
			/>
			<div className='flex flex-col md:flex-row items-center justify-center gap-8 xl:pt-8 xl:pb-24'>
				<div className='w-full xl:w-1/2'>
					<ul className='grid grid-cols-1 gap-[30px]'>
						{group3.map((feature, index) => (
							<li
								key={index}
								className='bg-[#232329] h-auto xl:h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 hover:scale-110 hover:transition-all ease-in-out duration-500'
							>
								<span className='text-[#FFEA00] font-bold'>
									{feature.title}
								</span>
								<p className='text-white'>{feature.description}</p>
							</li>
						))}
					</ul>
				</div>
				<div className='w-full xl:w-1/2 px-6'>
					<div className='relative w-full h-full hover:scale-110 hover:transition-all ease-in-out duration-500'>
						<Image
							src='/assets/images/mobile-app/safe-bike-app-3.png'
							priority
							quality={100}
							width={500}
							height={500}
							alt=''
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SafeBikeApp
