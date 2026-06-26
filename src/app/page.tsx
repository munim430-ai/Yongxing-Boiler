import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyYongxing from "@/components/WhyYongxing";
import Products from "@/components/Products";
import Compliance from "@/components/Compliance";
import AfterSales from "@/components/AfterSales";
import SavingsCalculator from "@/components/SavingsCalculator";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyYongxing />
        <Products />
        <Compliance />
        <AfterSales />
        <SavingsCalculator />
        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}
