import { FC } from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Questrial } from 'next/font/google'
import LabelImage from '../organisms/LabelImage'
import Image from 'next/image'
const questrial = Questrial({ subsets: ['latin'], weight: ['400'] })

const HeroSection: FC = () => {
	return (
		<div className='py-20 md:py-32 lg:py-20 flex mx-[10px] lg:mx-[4rem] xl:mx-[8rem] items-center'>
			<div className='flex flex-col w-full gap-14 xl:gap-28'>
				<div className='flex flex-col items-start justify-between w-full gap-1 md:flex-row'>
					<h1 className='text-4xl sm:text-[56px] md:text-4xl lg:text-[48px] xl:text-[56px] font-semibold leading-[140%] sm:leading-[135%] md:leading-[140%]'>
						Digital Workspace, <br /> Enhanced{' '}
						<span className='text-green-brand'>Productivity</span>
					</h1>
					<div className='flex flex-col gap-5'>
						<p
							className={`${questrial.className} text-base text-muted-foreground`}
						>
							Enhance team collaboration with our rooms anytime <br /> and
							anywhere for efficient communication.
						</p>
						<Button
							asChild
							className='w-3/5 text-base font-semibold transition-all duration-300 rounded-full bg-green-brand h-14 xl:w-1/2'
							size={'lg'}
						>
							<Link href={'/auth/signin'}>Reserve room now</Link>
						</Button>
					</div>
				</div>

				<div className='flex flex-col w-full gap-2'>
					<LabelImage label='New' text='Modern buildings' />
					<div className='grid grid-rows-2 gap-2 lg:gap-4 lg:grid-rows-1 grid-col-5 lg:grid-cols-12'>
						<div className='relative h-64 col-span-2 rounded-md lg:h-[420px] lg:col-span-3'>
							<Image
								src={'/images/heroTwo.jpg'}
								alt='hero-img-1'
								fill
								className='object-cover w-full h-full rounded-md'
							/>
						</div>
						<div className='relative h-64 col-span-3 rounded-md lg:h-[420px] lg:col-span-4'>
							<Image
								src={'/images/heroOne.jpg'}
								alt='hero-img-2'
								fill
								className='object-cover w-full h-full rounded-md'
							/>
						</div>
						<div className='relative col-span-5 lg:col-span-5'>
							<Image
								src={'/images/heroThree.jpg'}
								alt='hero-img-3'
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

export default HeroSection
