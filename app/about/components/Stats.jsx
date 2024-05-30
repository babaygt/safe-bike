'use client'

import CountUp from 'react-countup'

const stats = [
	{ number: 445, text: 'cyclists Killed in Germany in 2019' },
	{ number: 27, sign: '%', text: 'increase in Cyclist Deaths in 2022' },
	{
		number: 70,
		sign: '%',
		text: 'of Cycling Accidents Occur in Urban Areas',
	},
	{ number: 40, sign: '%', text: 'of Cyclists Do Not Feel Safe' },
]

const Stats = () => {
	return (
		<div className='pt-4 pb-12 xl:pt-8 xl:pb-24'>
			<div>
				<div className='flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none'>
					{stats.map((item, index) => {
						return (
							<div
								className='flex-1 flex gap-4 items-center justify-center xl:justify-start bg-[#27272c] p-3 rounded-lg hover:scale-110 hover:transition-all ease-in-out duration-500'
								key={index}
							>
								<div>
									<CountUp
										end={item.number}
										duration={5}
										delay={2}
										className={`text-4xl xl:text-6xl font-extrabold ${
											index % 2 === 0 ? 'text-accent' : 'text-white'
										} `}
									/>
									{item.sign && (
										<span
											className={`text-4xl xl:text-6xl font-extrabold ${
												index % 2 === 0 ? 'text-accent' : 'text-white'
											}`}
										>
											{item.sign}
										</span>
									)}
								</div>
								<p
									className={`${
										item.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'
									} ${
										index % 2 === 0 ? 'text-accent-hover' : 'text-white'
									} leading-snug `}
								>
									{item.text}
								</p>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}
export default Stats
