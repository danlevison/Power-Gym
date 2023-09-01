import "./globals.css"
import { Ubuntu } from "next/font/google"
import Nav from "@/components/Nav"
import Banner from "@/components/Banner"
import Footer from "@/components/Footer"

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400"],
});

export const metadata = {
  title: "Power 力 | Gym",
  description: "Power gym is a professional fitness facility that offers a wide range of exercise equipment, classes, and amenities to help individuals achieve their fitness goals. Discover the benefits of joining a commercial gym and how to make the most of your membership.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <header>
          <Nav />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  )
}
