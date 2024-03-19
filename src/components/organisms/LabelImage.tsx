import { FC } from 'react'

type TLabelImageProps = {
	label: string
	text: string
}

const LabelImage: FC<TLabelImageProps> = ({ label, text }) => {
	return (
		<div className='p-[6px] border border-muted-foreground rounded-full w-fit'>
			<div className='flex items-center gap-1 text-xs font-medium'>
				<div className='px-3 py-1 rounded-full bg-green-brand text-[#f9f9f9]'>
					{label}
				</div>
				<div className='text-muted-foreground'>{text}</div>
			</div>
		</div>
	)
}

export default LabelImage
