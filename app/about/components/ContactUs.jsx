import Link from 'next/link'
import Title from './Title'

const ContactUs = () => {
	return (
		<>
			<Title
				text='Contact Us'
				position='left'
				size='text-2xl lg:text-3xl xl:text-4xl font-bold'
				color='text-accent'
			/>
			<div className='rounded-xl h-auto lg:h-40 hover:scale-110 hover:transition-all ease-in-out duration-500'>
				<p className='text-lg p-3 h-full bg-[#27272c] rounded-xl'>
					We would <span className='text-accent'>love to hear from you</span>!
					For more information or to get involved, please{' '}
					<Link href='/contact'>
						{' '}
						<span className='text-[#FFEA00] font-bold hover:text-[#e8d500]'>
							contact us.
						</span>{' '}
					</Link>
				</p>
			</div>
		</>
	)
}
export default ContactUs
