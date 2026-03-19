import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Trainers from '../components/Trainers';
import Pricing from '../components/Pricing';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import { SectionHeaderSkeleton, CardSkeleton, TrainerSkeleton } from '../components/Skeleton';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-light dark:bg-dark">
        <Navbar />
        <main className="pt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeaderSkeleton />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </div>
          <SectionHeaderSkeleton />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TrainerSkeleton />
            <TrainerSkeleton />
            <TrainerSkeleton />
            <TrainerSkeleton />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Trainers />
        <Pricing />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
