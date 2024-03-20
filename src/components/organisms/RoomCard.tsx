import Image from 'next/image'
import { FC } from 'react'
import { Button } from '../ui/button'
import { MapPin } from 'lucide-react'
import Link from 'next/link'

type TRoomCardProps = {
	id: number
	name: string
	location: string
	price: number[]
}

const RoomCard: FC<TRoomCardProps> = ({ id, name, location, price }) => {
	return (
		<div
			className={`${
				name === 'Amphitheater'
					? 'md:col-span-12 xl:col-span-4'
					: 'md:col-span-6 xl:col-span-4'
			} col-span-4 flex flex-col p-2 rounded-md bg-white border border-green-brand`}
		>
			<div
				className={`${
					name === 'Amphitheater'
						? 'md:h-96 lg:h-[400px] xl:h-[500px]'
						: 'md:h-80'
				} z-10 relative h-64 sm:h-72 xl:h-[320px] rounded-sm lg:h-[300px]`}
			>
				<div className='absolute z-50 top-2 right-2'>
					<div className='p-1 border border-muted-foreground rounded-full w-fit'>
						<div className='px-3 py-1 rounded-full bg-green-brand text-[#f9f9f9]'>
							5.0 rating
						</div>
					</div>
				</div>
				<Image
					src={'/images/buildingOne.jpg'}
					alt='building-img-1'
					fill
					className='object-cover w-full h-full rounded-md'
				/>
			</div>

			<div className='flex flex-col gap-2 p-4'>
				<div className='flex flex-col gap-1'>
					<h1 className='text-3xl md:text-4xl font-semibold'>{name}</h1>
					<div className='flex gap-2 items-center text-muted-foreground'>
						<MapPin />
						{location}
					</div>
					<div className='flex items-center gap-4 pt-2'>
						<p className='text-4xl md:text-3xl text-green-brand font-semibold'>
							{price[0]}K{' '}
							<span className='text-xl font-medium text-muted-foreground'>
								/ half-day
							</span>
						</p>
						<p className='text-4xl md:text-3xl text-green-brand font-semibold'>
							{price[1]}K{' '}
							<span className='text-xl font-medium text-muted-foreground'>
								/ full-day
							</span>
						</p>
					</div>
				</div>
				<Button
					asChild
					className='self-end mt-4 w-3/5 text-base font-semibold transition-all duration-300 rounded-full bg-green-brand h-14 xl:w-1/2'
					size={'lg'}
				>
					<Link href={`/room/${id}`}>Reserve room</Link>
				</Button>
			</div>
		</div>
	)
}

export default RoomCard
