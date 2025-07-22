import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import LayoutClientFeatures from "./components/LayoutClientFeatures";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Richard Stewart - Full Stack Developer",
  description:
    "This is the portfolio of Richard Stewart. I am creative and detail-oriented Full Stack Developer with expertise in designing and implementing scalable web applications. Skilled in HTML, CSS, JavaScript, and frameworks like Vue.js and React for front-end development, along with back-end technologies such as Node.js, Django, and Ruby on Rails. Experienced with RESTful API development, database design, and cloud services. Passionate about building seamless user experiences and contributing to innovative tech projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutClientFeatures />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
