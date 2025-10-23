"use client"

import ContactUs from './components/contactus';
import Features from './components/features';
import Footer from './components/footer';
import Hero from './components/hero';
import Nav from './components/nav';
import Partners from './components/partners';
import Section from './components/section';
import Services from './components/services';

export default function Home() {

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-950 via-slate-950 to-blue-950 dark:from-slate-900 dark:to-black">
      {/* Navigation */}

      {/* <StripedPatternComponent /> */}

      <Nav />

      {/* Hero Carousel */}

      <Hero />

      {/* Features Section */}

      <Features />

      <Services />

      {/* Projects */}

      {/* <Projects /> */}
      {/* Partners */}
      <Partners />



      {/* CTA Section */}

      <ContactUs />


      {/* Footer */}
      <Footer />

    </div>
  );
}