
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StarfieldBackground from '@/components/StarfieldBackground';
import ParallaxSeaBackground from '@/components/ParallaxSeaBackground';
import AudioPlayer from '@/components/AudioPlayer';
import TransitionButton from '@/components/TransitionButton';
import { BookAudio, Headphones } from 'lucide-react';

interface AudioBook {
  id: number;
  title: string;
  description: string;
  price: string;
  duration: string;
  sample: string;
}

const audioBooks: AudioBook[] = [
  {
    id: 1,
    title: "Трансерфинг реальности. Ступень I",
    description: "Аудиокнига, раскрывающая основы Трансерфинга. Вводные понятия, базовые принципы и первые практики.",
    price: "1200 ₽",
    duration: "5 часов 30 минут",
    sample: "/audio-sample.mp3"
  },
  {
    id: 2,
    title: "Трансерфинг реальности. Ступень II",
    description: "Продолжение основной серии аудиокниг. Углубленные практики и расширенные объяснения процессов Трансерфинга.",
    price: "1200 ₽",
    duration: "6 часов 15 минут",
    sample: "/audio-sample.mp3"
  },
  {
    id: 3,
    title: "Медитативные практики Трансерфинга",
    description: "Набор аудиомедитаций для ежедневной практики. Помогает настроиться на нужные линии жизни и укрепить намерение.",
    price: "1500 ₽",
    duration: "8 часов (10 медитаций)",
    sample: "/audio-sample.mp3"
  },
  {
    id: 4,
    title: "Пространство вариантов: практическое руководство",
    description: "Практичный аудиокурс по работе с пространством вариантов. Техники перехода между линиями жизни.",
    price: "1800 ₽",
    duration: "7 часов 20 минут",
    sample: "/audio-sample.mp3"
  }
];

const AudioBooksPage: React.FC = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <StarfieldBackground />
      <ParallaxSeaBackground />
      
      <div className="relative z-10">
        <Header />
        
        <main className="pt-12 pb-24 px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <h1 className="text-4xl md:text-5xl font-light tracking-wide text-glow">
                Аудиокниги и практики
              </h1>
              <p className="text-cosmic-muted text-lg font-extralight max-w-2xl mx-auto">
                Коллекция аудиокниг, медитаций и практических упражнений по Трансерфингу. Удобный формат для обучения в любое время.
              </p>
            </div>
            
            <div className="space-y-8">
              {audioBooks.map((book) => (
                <div key={book.id} className="cosmic-blur rounded-xl p-6 md:p-8 space-y-4 md:space-y-0 md:flex md:items-start md:gap-8">
                  <div className="md:w-[200px] flex-shrink-0 flex justify-center">
                    <div className="h-40 w-40 md:h-48 md:w-48 rounded-full flex items-center justify-center bg-cosmic-accent/10 border border-cosmic-accent/20">
                      <BookAudio size={60} className="text-cosmic-accent/70" />
                    </div>
                  </div>
                  
                  <div className="flex-grow space-y-4">
                    <div>
                      <h2 className="text-xl md:text-2xl font-light">{book.title}</h2>
                      <p className="text-cosmic-muted mt-2">{book.description}</p>
                      <p className="text-cosmic-muted/70 text-sm mt-1">Продолжительность: {book.duration}</p>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-sm text-cosmic-muted/80">Предварительный просмотр:</p>
                      <AudioPlayer 
                        title={`Фрагмент "${book.title}"`}
                        audioSrc={book.sample}
                        duration="01:30 | Фрагмент"
                      />
                    </div>
                    
                    <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
                      <span className="text-cosmic-accent text-xl">{book.price}</span>
                      <div className="flex gap-3">
                        <TransitionButton variant="amber" className="group">
                          <Headphones size={16} />
                          <span>Прослушать полностью</span>
                        </TransitionButton>
                        <TransitionButton className="group">
                          <span>Купить</span>
                        </TransitionButton>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default AudioBooksPage;
