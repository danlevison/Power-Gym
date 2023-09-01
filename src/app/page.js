import LandingPage from "@/components/LandingPage"
import ServicesSection from "@/components/ServicesSection"
import ResultsSection from "@/components/ResultsSection"
import QuoteSection from "@/components/QuoteSection"
import Pricing from "@/components/Pricing"
import Banner from "@/components/Banner"

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <LandingPage />
      <ServicesSection />
      <ResultsSection />
      <QuoteSection />
      <Pricing />
      <Banner />
    </main>
  ) 
}
