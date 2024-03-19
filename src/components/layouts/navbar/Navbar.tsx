import { FC } from 'react'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

const Navbar: FC = () => {
	return (
		<nav className='z-20 md:sticky md:top-0 md:shadow-none'>
			<DesktopNav />
			<MobileNav />
		</nav>
	)
}

export default Navbar
