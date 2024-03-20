import AboutSection from '@/components/layouts/AboutSection'
import FeaturesSection from '@/components/layouts/FeaturesSection'
import HeroSection from '@/components/layouts/HeroSection'
import { FC } from 'react'

const Homepage: FC = () => {
	return (
		<>
			<HeroSection />
			<FeaturesSection />
			<AboutSection />
		</>
	)
}

export default Homepage
