'use client'

import Title from './Title'

const Story = () => {
	return (
		<div className='p-6 lg:p-8 xl:p-10 bg-[#27272c] rounded-xl md:hover:scale-[1.03] xl:hover:scale-110 hover:transition-all ease-in-out duration-500'>
			<Title
				text='Our Story'
				position='left'
				size='text-2xl lg:text-3xl xl:text-4xl font-bold'
				color='text-accent'
			/>
			<p className='text-lg'>
				The inspiration for Safe Bike emerged from the{' '}
				<span className='text-accent'>
					alarming increase in cycling-related accidents
				</span>
				. Prenzlauer Berg is one of Berlin&apos;s most popular cycling
				districts, but it faces{' '}
				<span className='text-accent'>significant safety issues</span> due to{' '}
				<span className='text-accent'>inadequate infrastructure</span> and{' '}
				<span className='text-accent'>high traffic density</span>. Recognizing
				the <span className='text-accent'>urgent need for a solution</span>, our
				team came together to develop a platform that not only{' '}
				<span className='text-accent'>enhances safety</span> but also{' '}
				<span className='text-accent'>builds a strong cycling community</span>.
			</p>
		</div>
	)
}
export default Story
