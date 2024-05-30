'use client'

import Image from 'next/image'
import Title from './Title'

const SafeBikePhoneHolder = () => {
	return (
		<div className='pt-4 pb-12 xl:pt-8 xl:pb-24'>
			<Title
				text='Safe Bike Phone Holder'
				position='left'
				size='text-2xl lg:text-3xl xl:text-4xl font-bold'
				color='text-accent'
			/>

			{/* Purpose Section */}

			<div className='flex flex-col lg:flex-row items-center justify-center gap-8 xl:pt-8 xl:pb-24'>
				<div className='w-full xl:w-1/2'>
					<div className='flex'>
						<div className='bg-[#232329] h-auto  py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 hover:scale-110 hover:transition-all ease-in-out duration-500'>
							<span className='text-[#FFEA00] font-bold'>Purpose</span>
							<p className='text-white'>
								The Safe Bike Phone Holder is a{' '}
								<span className='text-accent'>
									robust, 3D-printed accessory
								</span>{' '}
								designed to securely attach your smartphone to your bicycle. Its{' '}
								<span className='text-accent'>adjustable design</span>{' '}
								accommodates a variety of phone sizes, ensuring a snug fit and
								easy access to your device while riding.
							</p>
						</div>
					</div>
				</div>

				<div className='w-full xl:w-1/2 px-6'>
					<div className='relative w-full h-full hover:scale-110 hover:transition-all ease-in-out duration-500'>
						<Image
							src='/assets/images/phone-holder/holder-1.jpg'
							priority
							quality={100}
							width={500}
							height={500}
							alt='Safe Bike Phone Holder Purpose'
						/>
					</div>
				</div>
			</div>

			{/* Description Section */}

			<div className='flex flex-col lg:flex-row items-center justify-center gap-8 xl:pt-8 xl:pb-24'>
				<div className='w-full order-2 lg:order-1 xl:w-1/2 px-6'>
					<div className='relative w-full h-full hover:scale-110 hover:transition-all ease-in-out duration-500'>
						<Image
							src='/assets/images/phone-holder/holder-2.JPG'
							priority
							quality={100}
							width={500}
							height={500}
							alt='Safe Bike Phone Holder Description'
						/>
					</div>
				</div>
				<div className='w-full xl:w-1/2 order-1 lg:order-2'>
					<div className='grid grid-cols-1 gap-[30px]'>
						<div className='bg-[#232329] h-auto  py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 hover:scale-110 hover:transition-all ease-in-out duration-500'>
							<span className='text-[#FFEA00] font-bold'>Description</span>
							<p className='text-white'>
								The primary purpose of the Safe Bike phone holder is to provide
								cyclists with a{' '}
								<span className='text-accent'>convenient and secure</span> way
								to use their smartphones for navigation and real-time updates
								while riding. This accessory enhances safety by allowing{' '}
								<span className='text-accent'>hands-free operation</span> of the
								Safe Bike app, ensuring that cyclists can focus on the road and
								enjoy a seamless, connected riding experience.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SafeBikePhoneHolder
