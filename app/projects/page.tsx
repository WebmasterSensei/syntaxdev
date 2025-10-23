"use client"
import Footer from '../components/footer';
import Nav from '../components/nav';
import Projects from '../components/projects';

export default function Home() {

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-950 via-slate-950 to-blue-950 dark:from-slate-900 dark:to-black">
      {/* Navigation */}

      {/* <StripedPatternComponent /> */}

      <Nav />

      <Projects />

      <Footer />

    </div>
  );
}