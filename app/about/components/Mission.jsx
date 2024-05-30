'use client'

import Title from './Title'

const Mission = () => {
	return (
		<div className='p-6 lg:p-8 xl:p-10 bg-[#27272c] rounded-xl hover:scale-110 hover:transition-all ease-in-out duration-500'>
			<Title
				text='Our Mission'
				position='left'
				size='text-2xl lg:text-3xl xl:text-4xl font-bold'
				color='text-accent'
			/>
			<p className='text-lg'>
				Safe Bike is committed to{' '}
				<span className='text-accent'>revolutionizing cycling safety</span> in
				Prenzlauer Berg, Berlin. Our mission is to{' '}
				<span className='text-accent'>empower cyclists</span> with the tools and
				information they need to{' '}
				<span className='text-accent'>
					navigate the city safely and confidently
				</span>
				. By leveraging{' '}
				<span className='text-accent'>cutting-edge technology</span> and
				fostering a <span className='text-accent'>strong community spirit</span>
				, we aim to{' '}
				<span className='text-accent'>reduce cycling-related accidents</span>{' '}
				and promote a culture of{' '}
				<span className='text-accent'>conscious and informed cyclists</span>.
			</p>
		</div>
	)
}
export default Mission
