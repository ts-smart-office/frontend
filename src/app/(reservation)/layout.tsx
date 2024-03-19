import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import '../globals.css'

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
			<body className={urbanist.className}>{children}</body>
		</html>
	)
}
