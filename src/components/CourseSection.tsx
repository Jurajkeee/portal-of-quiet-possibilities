
import React from 'react';
import TransitionButton from './TransitionButton';

const CourseSection: React.FC = () => {
  return (
    <section id="course" className="mt-16 section-spacing px-6 md:px-12 bg-gradient-to-b from-black/50 via-cosmic to-cosmic relative">
      <div className="absolute inset-0 opacity-15 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-cosmic-accent/20 blur-3xl"></div>
        <div className="absolute top-40 -left-20 w-64 h-64 rounded-full bg-cosmic-accent/20 blur-3xl"></div>
      </div>
      
      <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in relative z-10">
        <h2 className="text-3xl md:text-4xl font-light tracking-wide">
          Онлайн-курс Трансерфинга
        </h2>
        <p className="text-cosmic-muted text-lg md:text-xl font-extralight leading-relaxed">
          Глубокое погружение в практику управления реальностью через осознанность, 
          намерение и связь с пространством вариантов. Курс от практиков Трансерфинга.
        </p>
        <div className="pt-8 flex justify-center">
          <TransitionButton glow={true} variant="default" className="group">
            <span>Забронировать место</span>
            <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
          </TransitionButton>
        </div>
        <div className="pt-4 text-cosmic-muted/60 text-sm font-light">
          Запуск весной 2024 — ограниченное количество мест
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
