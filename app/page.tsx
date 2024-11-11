import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        {/*  main content goes here */}
        <Hero />
        <About />
        <Services />
        </main>
      <Footer />
    </div>
  );
}
