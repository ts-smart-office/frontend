import { Questrial } from 'next/font/google'
import { FC } from 'react'
import LabelImage from '../organisms/LabelImage'
import Image from 'next/image'
const questrial = Questrial({ subsets: ['latin'], weight: ['400'] })

const AboutSection: FC = () => {
	return (
		<div className='py-4 md:py-6 lg:py-20 flex flex-col gap-6 lg:gap-10 mx-[10px] lg:mx-[4rem] xl:mx-[8rem] items-center'>
			<div className='flex flex-col items-center justify-center gap-4'>
				<h1 className='w-full text-3xl sm:text-4xl lg:text-5xl font-semibold text-center leading-[125%] lg:leading-[130%]'>
					Building Futures <br /> Tiga Serangkai{' '}
					<span className='text-green-brand'>SMART Office</span>
				</h1>
				<p
					className={`${questrial.className} w-full md:w-2/3 text-center text-base text-muted-foreground`}
				>
					Education is the path to building a civilization. Introducing Tiga
					Serangkai SMART Office, a milestone in Tiga Serangkai's journey
					towards staying relevant.
				</p>
			</div>
			<div className='flex flex-col w-full'>
				<div className='grid grid-rows-1 gap-6 lg:gap-4 grid-col-1 md:grid-cols-2 lg:grid-cols-12'>
					<div className='flex flex-col gap-2 md:col-span-1 lg:col-span-5 col-span-1'>
						<LabelImage label='100+' text='Successfully reservation' />
						<div className='relative h-64 rounded-md lg:h-[420px]'>
							<Image
								src={'/images/buildingOne.jpg'}
								alt='building-img-1'
								fill
								className='object-cover w-full h-full rounded-md'
							/>
						</div>
					</div>
					<div className='flex flex-col gap-2 md:col-span-1 lg:col-span-7 col-span-1'>
						<LabelImage label='100+' text='Successfully reservation' />
						<div className='relative h-64 rounded-md lg:h-[420px]'>
							<Image
								src={'/images/buildingTwo.jpg'}
								alt='building-img-2'
								fill
								className='object-cover w-full h-full rounded-md'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutSection
