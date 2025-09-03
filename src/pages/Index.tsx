import React from 'react';
import HeroSection from '@/components/genvity/HeroSection';
import ProblemSolutionSection from '@/components/genvity/ProblemSolutionSection';
import PlansSection from '@/components/genvity/PlansSection';
import DashboardSection from '@/components/genvity/DashboardSection';
import TestimonialsSection from '@/components/genvity/TestimonialsSection';
import VideoSection from '@/components/genvity/VideoSection';
import PartnersSection from '@/components/genvity/PartnersSection';
import LeadCaptureSection from '@/components/genvity/LeadCaptureSection';
import Footer from '@/components/genvity/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Problem → Solution → Transformation */}
      <ProblemSolutionSection />
      
      {/* Plans Section */}
      <PlansSection />
      
      {/* Dashboard/Results Section */}
      <DashboardSection />
      
      {/* Testimonials */}
      <TestimonialsSection />
      
      {/* Video Section */}
      <VideoSection />
      
      {/* Partners & Supporters */}
      <PartnersSection />
      
      {/* Lead Capture */}
      <LeadCaptureSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
