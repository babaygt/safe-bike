'use client'

import Title from './Title'

const Research = () => {
	return (
		<>
			<div className='pt-4 pb-12 xl:pt-8 xl:pb-24'>
				<div className='mt-3'>
					<Title
						text='Primary Research'
						position='left'
						size='text-2xl md:text-3xl xl:text-4xl font-bold'
						color='text-accent'
					/>
					<div>
						<p className='text-base md:text-lg p-3 bg-[#27272c] rounded-xl md:hover:scale-[1.03] xl:hover:scale-110 hover:transition-all ease-in-out duration-500'>
							We conducted <span className='text-accent'>primary research</span>{' '}
							in the form of{' '}
							<span className='text-accent'>surveys and interviews</span> with
							cyclists in Prenzlauer Berg. Our goal was to{' '}
							<span className='text-accent'>understand the challenges</span>{' '}
							they face and the tools they use to navigate the city.
						</p>
					</div>
					<div className='flex flex-col md:flex-row justify-center items-center gap-8 my-8'>
						<div className='basis-full md:basis-1/3 p-3 md:h-96 lg:h-60 bg-[#27272c] rounded-xl flex flex-col md:hover:scale-[1.03] xl:hover:scale-110 hover:transition-all ease-in-out duration-500'>
							<span className='text-[#FFEA00] font-bold'>Safety Concerns </span>
							<p className='text-white'>
								Many cyclists reported feeling unsafe due to{' '}
								<span className='text-accent'>narrow bike lanes</span>,{' '}
								<span className='text-accent'>high traffic areas</span>, and{' '}
								<span className='text-accent'>inadequate signage</span>.
							</p>
						</div>
						<div className='basis-full md:basis-1/3 p-3 md:h-96 lg:h-60 bg-[#27272c] rounded-xl flex flex-col md:hover:scale-[1.03] xl:hover:scale-110 hover:transition-all ease-in-out duration-500'>
							<span className='text-[#FFEA00] font-bold'>
								Navigation Needs{' '}
							</span>
							<p className='text-white'>
								A significant number of cyclists struggle with finding{' '}
								<span className='text-accent'>safe and efficient routes</span>,
								highlighting the need for{' '}
								<span className='text-accent'>reliable navigation tools</span>.
							</p>
						</div>
						<div className='basis-full md:basis-1/3 p-3 md:h-96 lg:h-60 bg-[#27272c] rounded-xl flex flex-col md:hover:scale-[1.03] xl:hover:scale-110 hover:transition-all ease-in-out duration-500'>
							<span className='text-[#FFEA00] font-bold'>
								Community Desire{' '}
							</span>
							<p className='text-white'>
								There is a <span className='text-accent'>strong desire</span>{' '}
								among cyclists to{' '}
								<span className='text-accent'>connect with others</span>, share
								tips, and support each other in promoting{' '}
								<span className='text-accent'>safer cycling practices</span>.
							</p>
						</div>
					</div>
				</div>

				<div className='mt-3'>
					<Title
						text='Secondary Research'
						position='left'
						size='text-2xl md:text-3xl xl:text-4xl font-bold'
						color='text-accent'
					/>
					<div>
						<p className='text-base md:text-lg p-3 bg-[#27272c] rounded-xl md:hover:scale-[1.03] xl:hover:scale-110 hover:transition-all ease-in-out duration-500'>
							Our <span className='text-accent'>secondary research</span>{' '}
							involved analyzing data from{' '}
							<span className='text-accent'>government reports</span>,{' '}
							<span className='text-accent'>academic studies</span>, and{' '}
							<span className='text-accent'>cycling organizations</span>.
							Notable insights as follows:
						</p>
					</div>
					<div className='flex flex-col md:flex-row justify-center items-center gap-8 my-8'>
						<div className='basis-full md:basis-1/3 p-3 md:h-96 lg:h-72 bg-[#27272c] rounded-xl flex flex-col md:hover:scale-[1.03] xl:hover:scale-110 hover:transition-all ease-in-out duration-500'>
							<span className='text-[#FFEA00] font-bold'>
								Increasing Cyclist Fatalities
							</span>
							<p className='text-white'>
								Despite a decrease in overall traffic deaths,{' '}
								<span className='text-accent'>cyclist fatalities</span> have
								been rising, particularly among{' '}
								<span className='text-accent'>older adults</span> and{' '}
								<span className='text-accent'>e-bike users</span>.
							</p>
						</div>
						<div className='basis-full md:basis-1/3 p-3 md:h-96 lg:h-72 bg-[#27272c] rounded-xl flex flex-col md:hover:scale-[1.03] xl:hover:scale-110 hover:transition-all ease-in-out duration-500'>
							<span className='text-[#FFEA00] font-bold'>
								Tech-Savvy Cyclists
							</span>
							<p className='text-white'>
								Many cyclists are open to adopting{' '}
								<span className='text-accent'>new technologies</span> that can
								enhance their <span className='text-accent'>safety</span> and
								overall <span className='text-accent'>cycling experience</span>.
							</p>
						</div>
						<div className='basis-full md:basis-1/3 p-3 md:h-96 lg:h-72 bg-[#27272c] rounded-xl flex flex-col md:hover:scale-[1.03] xl:hover:scale-110 hover:transition-all ease-in-out duration-500'>
							<span className='text-[#FFEA00] font-bold'>
								Infrastructure Needs
							</span>
							<p className='text-white'>
								The need for improved{' '}
								<span className='text-accent'>cycling infrastructure</span>,
								such as{' '}
								<span className='text-accent'>dedicated bike lanes</span> and{' '}
								<span className='text-accent'>safer intersections</span>, is
								critical to{' '}
								<span className='text-accent'>
									reducing accidents and fatalities
								</span>
								.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default Research
