import Title from './Title'
import Link from 'next/link'

const GetInvolved = () => {
	return (
		<>
			<Title
				text='Get Involved'
				position='left'
				size='text-2xl lg:text-3xl xl:text-4xl font-bold'
				color='text-accent'
			/>
			<div className='rounded-xl h-auto lg:h-40 md:hover:scale-[1.03] xl:hover:scale-110 hover:transition-all ease-in-out duration-500'>
				<p className='text-lg p-3 h-full bg-[#27272c] rounded-xl'>
					Your <span className='text-accent'>feedback</span> and{' '}
					<span className='text-accent'>participation</span> are crucial to our
					mission. Visit our
					<Link href='/wallofthoughts'>
						{' '}
						<span className='text-[#FFEA00] font-bold hover:text-[#e8d500]'>
							Wall of Thoughts page
						</span>{' '}
					</Link>{' '}
					to share your <span className='text-accent'>ideas</span>,{' '}
					<span className='text-accent'>experiences</span>, and{' '}
					<span className='text-accent'>suggestions</span>. Join us in our
					efforts to make Prenzlauer Berg a{' '}
					<span className='text-accent'>safer place for cyclists</span>.
				</p>
			</div>
		</>
	)
}
export default GetInvolved
