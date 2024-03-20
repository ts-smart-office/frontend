import { FC } from 'react'
import FeatureCard from '../organisms/FeatureCard'
import { featuresContent } from '@/constants'

const FeaturesSection: FC = () => {
	return (
		<div
			id='features'
			className='py-4 md:py-6 lg:py-20 flex flex-col gap-10 mx-[10px] lg:mx-[4rem] xl:mx-[8rem] items-center'
		>
			<h1 className='w-full text-3xl sm:text-4xl lg:text-5xl font-semibold text-center leading-[125%] lg:leading-[130%]'>
				Elevating Your Experience with <br /> Our Websites{' '}
				<span className='text-green-brand'>Key Features</span>
			</h1>
			<div className='w-full grid grid-cols-1 lg:grid-cols-12 gap-6'>
				{featuresContent.map((item, idx) => (
					<FeatureCard
						key={idx}
						iconPath={item.iconPath}
						title={item.title}
						subtitle={item.subtitle}
					/>
				))}
			</div>
		</div>
	)
}

export default FeaturesSection
