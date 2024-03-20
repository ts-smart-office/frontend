import { Questrial } from 'next/font/google'
import Image from 'next/image'
import { FC } from 'react'
const questrial = Questrial({ subsets: ['latin'], weight: ['400'] })

type TFeatureCardProps = {
	iconPath: string
	title: string
	subtitle: string
}

const FeatureCard: FC<TFeatureCardProps> = ({ iconPath, title, subtitle }) => {
	return (
		<div className='col-span-4 border border-green-brand rounded-md bg-[#f1fffa] cursor-pointer'>
			<div className='flex flex-col p-12 gap-2 items-start'>
				<Image src={iconPath} alt='eye-icon' width={80} height={80} />
				<p className='text-[28px] font-semibold'>{title}</p>
				<p className={`${questrial.className} text-muted-foreground`}>
					{subtitle}
				</p>
			</div>
		</div>
	)
}

export default FeatureCard
