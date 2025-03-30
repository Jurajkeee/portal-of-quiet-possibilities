
import React from 'react';
import TransitionButton from './TransitionButton';

const CourseSection: React.FC = () => {
  return (
    <section id="course" className="section-spacing px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-light tracking-wide">
          Онлайн-курс Трансерфинга
        </h2>
        <p className="text-cosmic-muted text-lg md:text-xl font-extralight leading-relaxed">
          Глубокое погружение в практику управления реальностью через осознанность, 
          намерение и связь с пространством вариантов. Курс от практиков Трансерфинга.
        </p>
        <div className="pt-8 flex justify-center">
          <TransitionButton glow={true} className="group">
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
