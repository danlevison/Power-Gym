import LandingPage from "@/components/LandingPage"
import ServicesSection from "@/components/ServicesSection"
import ResultsSection from "@/components/ResultsSection"
import QuoteSection from "@/components/QuoteSection"
import PricingSection from "@/components/PricingSection"
import Banner from "@/components/Banner"

export default function Home() {
	return (
		<main className="w-full">
			<LandingPage />
			<ServicesSection />
			<ResultsSection />
			<QuoteSection />
			<PricingSection />
			<Banner />
		</main>
	)
}
