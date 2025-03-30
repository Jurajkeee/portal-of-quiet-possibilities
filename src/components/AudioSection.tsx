
import React from 'react';
import AudioPlayer from './AudioPlayer';
import TransitionButton from './TransitionButton';

const AudioSection: React.FC = () => {
  return (
    <section id="audio" className="section-spacing px-6 md:px-12">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-6 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide">
            Аудиокниги и практики
          </h2>
          <p className="text-cosmic-muted text-lg font-extralight max-w-2xl mx-auto">
            Погрузитесь в пространство Трансерфинга через звук. Аудиокниги и практические медитации для перехода между линиями жизни.
          </p>
        </div>
        
        <div className="space-y-4">
          <AudioPlayer 
            title="Фрагмент аудиокниги «Трансерфинг реальности»"
            audioSrc="/audio-sample.mp3" 
            duration="01:30 | Фрагмент"
          />
          
          <AudioPlayer 
            title="Аффирмации для управления реальностью"
            audioSrc="/audio-sample.mp3" 
            duration="02:15 | Фрагмент"
          />
          
          <AudioPlayer 
            title="Медитация «Пространство вариантов»"
            audioSrc="/audio-sample.mp3" 
            duration="01:45 | Фрагмент"
          />
        </div>
        
        <div className="flex justify-center pt-6">
          <TransitionButton to="/audio">
            Все аудиоматериалы
          </TransitionButton>
        </div>
      </div>
    </section>
  );
};

export default AudioSection;
