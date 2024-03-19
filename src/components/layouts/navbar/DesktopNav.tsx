import { Button } from '@/components/ui/button'
import { navMenu } from '@/constants'
import Link from 'next/link'
import { FC } from 'react'

const DesktopNav: FC = () => {
	return (
		<div className='hidden p-4 bg-white lg:block animate-in fade-in zoom-in'>
			<div className='flex justify-between mx-4 md:mx-[4rem] xl:mx-[8rem] items-center'>
				<div>
					<Link
						href={'/'}
						className='text-3xl font-semibold tracking-normal text-dark'
					>
						SmartOffice.
					</Link>
				</div>
				<div className='flex gap-[20px] xl:gap-[50px] text-[16px] items-center select-none'>
					{navMenu.map((item, idx) => (
						<Link
							href={item.href}
							key={idx}
							className='font-medium transition-colors duration-300 hover:text-green-brand'
						>
							{item.label}
						</Link>
					))}
				</div>
				<Button
					asChild
					variant={'outline'}
					className='border-dark rounded-full hover:bg-green-brand hover:border-green-brand font-semibold hover:text-[#f9f9f9] transition-all duration-300 text-base h-14'
					size={'lg'}
				>
					<Link href={'/auth/signin'}>Sign In / Sign Up</Link>
				</Button>
			</div>
		</div>
	)
}

export default DesktopNav
