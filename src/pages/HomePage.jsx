import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import CTASection from '@/components/home/CTASection';
import { Footer } from '@/components/home/Footer';
import Header from '@/components/home/Header';

export default function HomePage() {
    return (
        <div className="min-h-screen bg-slate-950">
            <Header />
            <HeroSection />
            <ServicesSection />
            <FeaturesSection />
            <CTASection />
            <Footer />
        </div>
    );
}
