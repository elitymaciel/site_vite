import React from 'react';
import Header from '@/components/home/Header';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import CTASection from '@/components/home/CTASection';
import { Footer } from '@/components/home/Footer';

export default function Home() {
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