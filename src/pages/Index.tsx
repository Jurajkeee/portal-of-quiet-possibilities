
import React from 'react';
import { Link } from 'react-router-dom';
import StarfieldBackground from '@/components/StarfieldBackground';
import ParallaxSeaBackground from '@/components/ParallaxSeaBackground';
import Header from '@/components/Header';
import CourseSection from '@/components/CourseSection';
import BooksSection from '@/components/BooksSection';
import AudioSection from '@/components/AudioSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';
import TransitionButton from '@/components/TransitionButton';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <StarfieldBackground />
      <ParallaxSeaBackground />
      
      <div className="relative z-10">
        <Header />
        
        {/* Hero Section */}
        <section className="min-h-[calc(100vh-6rem)] flex flex-col justify-center items-center px-6 md:px-12 pb-16 border-b border-cosmic-accent/10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extralight tracking-wide leading-tight text-glow animate-fade-in">
              Ты проснулся от шелеста утренних звёзд
            </h1>
            <p className="text-cosmic-muted text-lg md:text-xl font-extralight max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.3s'}}>
              Трансерфинг — это путь к управлению реальностью через осознанность 
              и резонанс с пространством вариантов. Добро пожаловать в тихую гавань за 
              пределами суеты.
            </p>
            
            <div className="pt-12 flex justify-center animate-fade-in" style={{animationDelay: '0.6s'}}>
              <TransitionButton 
                to="/course"
                glow={true} 
                variant="ruby"
                className="group"
              >
                <span>Войти в пространство</span>
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">↓</span>
              </TransitionButton>
            </div>
          </div>
        </section>
        
        <CourseSection />
        <BooksSection />
        <AudioSection />
        <NewsletterSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
