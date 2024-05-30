'use client'

import ContactUs from './components/ContactUs'
import GetInvolved from './components/GetInvolved'
import Mission from './components/Mission'
import OurVision from './components/OurVision'
import Research from './components/Research'
import SafeBikeApp from './components/SafeBikeApp'
import SafeBikeWebsite from './components/SafeBikeWebsite'
import Stats from './components/Stats'
import Story from './components/Story'
import Team from './components/Team'
import Title from './components/Title'

const About = () => {
	return (
		<>
			<div className='container mx-auto'>
				<section className='h-full'>
					<Title
						text='Welcome to'
						position='center'
						size='text-3xl lg:text-4xl xl:text-5xl'
						colorText='Safe Bike'
					/>
					{/* Mission & Story */}
					<div className='flex flex-col xl:flex-row gap-8 justify-between pt-4 pb-12 xl:pt-8 xl:pb-24 '>
						<div className='w-full xl:w-1/2 h-auto'>
							<Mission />
						</div>
						<div className='w-full xl:w-1/2 h-auto'>
							<Story />
						</div>
					</div>
				</section>

				{/** Our Artifacts */}

				<section className='h-full'>
					<Title
						text='Our'
						position='center'
						size='text-3xl lg:text-4xl xl:text-5xl'
						colorText='Artifacts'
					/>
					<SafeBikeWebsite />
					<SafeBikeApp />
				</section>

				{/** Our Research */}
				<section className='h-full'>
					<Title
						text='Our'
						position='center'
						size='text-3xl lg:text-4xl xl:text-5xl'
						colorText='Research'
					/>
					<Research />
				</section>

				{/** Stats */}
				<section className='h-full'>
					<Title
						text='Key'
						position='center'
						size='text-3xl lg:text-4xl xl:text-5xl'
						colorText='Statistics'
					/>
					<Stats />
				</section>

				{/** Our Team */}
				<section className='h-full'>
					<Title
						text='Meet the'
						position='center'
						size='text-3xl lg:text-4xl xl:text-5xl'
						colorText='Team'
					/>
					<Team />
				</section>

				{/** Our Vision */}

				<section className='h-full'>
					<Title
						text='Our'
						position='center'
						size='text-3xl lg:text-4xl xl:text-5xl'
						colorText='Vision'
					/>
					<OurVision />
				</section>

				{/** Get Involved and Contact */}
				<section className='h-full'>
					<Title
						text='Your Voice Matters: '
						position='center'
						size='text-3xl lg:text-4xl xl:text-5xl'
						colorText='Share, Contact, and Stay Updated'
					/>

					<div className='flex gap-8 pt-4 pb-12 xl:pt-8 xl:pb-24 '>
						<div className='flex flex-col xl:flex-row gap-8 justify-between xl:pt-8 xl:pb-24 '>
							<div className='w-full xl:w-1/2 h-auto'>
								<GetInvolved />
							</div>
							<div className='w-full xl:w-1/2 h-auto'>
								<ContactUs />
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	)
}
export default About
