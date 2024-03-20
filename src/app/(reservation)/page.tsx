import AboutSection from '@/components/layouts/AboutSection'
import FeaturesSection from '@/components/layouts/FeaturesSection'
import HeroSection from '@/components/layouts/HeroSection'
import RoomSection from '@/components/layouts/RoomSection'
import { FC } from 'react'

const Homepage: FC = () => {
	return (
		<>
			<HeroSection />
			<FeaturesSection />
			<AboutSection />
			<RoomSection />
		</>
	)
}

export default Homepage
