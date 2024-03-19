import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import '../globals.css'
import Navbar from '@/components/layouts/navbar/Navbar'

const urbanist = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'SmartOffice.',
	description: 'Tiga Serangkai Smart Office Webiste',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${urbanist.className} bg-[#F9F9F9]`}>
				<Navbar />
				{children}
			</body>
		</html>
	)
}
