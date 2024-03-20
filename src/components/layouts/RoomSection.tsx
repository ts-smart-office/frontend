import { Questrial } from 'next/font/google'
import { FC } from 'react'
import RoomCard from '../organisms/RoomCard'
import { listRooms } from '@/constants'
const questrial = Questrial({ subsets: ['latin'], weight: ['400'] })

const RoomSection: FC = () => {
	return (
		<div
			id='rooms'
			className='py-20 lg:py-20 flex flex-col gap-6 lg:gap-10 items-center bg-[#f1fffa]'
		>
			<div className='w-full flex flex-col'>
				<div className='mx-[10px] lg:mx-[4rem] xl:mx-[8rem]'>
					<div className='flex flex-col items-center justify-center gap-2'>
						<h1 className='w-full text-3xl sm:text-4xl lg:text-5xl font-semibold text-center leading-[125%] lg:leading-[130%]'>
							Explore Our <span className='text-green-brand'>Smart Rooms</span>
						</h1>
						<p
							className={`${questrial.className} w-full md:w-2/3 text-center text-base text-muted-foreground`}
						>
							Smart Spaces Unveiled: Elevating Your Meeting Experience with Tiga
							Serangkai
						</p>
					</div>
					<div className='mt-8 w-full grid grid-cols-1 md:grid-cols-12 gap-6'>
						{listRooms.map(item => (
							<RoomCard
								key={item.id}
								name={item.name}
								id={item.id}
								location={item.location}
								price={item.price}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default RoomSection
