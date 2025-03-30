
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StarfieldBackground from '@/components/StarfieldBackground';
import ParallaxSeaBackground from '@/components/ParallaxSeaBackground';
import TransitionButton from '@/components/TransitionButton';
import { Book } from 'lucide-react';

interface BookItem {
  id: number;
  title: string;
  author: string;
  price: string;
  description: string;
  format: string;
  imageSrc: string;
}

const books: BookItem[] = [
  {
    id: 1,
    title: "Трансерфинг реальности. Ступень I-V",
    author: "Вадим Зеланд",
    price: "2500 ₽",
    description: "Полное издание книги, включающее все пять ступеней Трансерфинга. Основы управления реальностью и взаимодействия с пространством вариантов.",
    format: "Бумажная книга",
    imageSrc: "https://placehold.co/300x450/1A1F2C/E5DEFF?text=Ступень+I-V"
  },
  {
    id: 2,
    title: "Апокрифический Трансерфинг",
    author: "Вадим Зеланд",
    price: "1800 ₽",
    description: "Дополнительные материалы, раскрывающие глубинные аспекты Трансерфинга. Для тех, кто уже освоил основы практики.",
    format: "Электронная книга",
    imageSrc: "https://placehold.co/300x450/1A1F2C/E5DEFF?text=Апокрифический"
  },
  {
    id: 3,
    title: "Вершитель реальности",
    author: "Вадим Зеланд",
    price: "2200 ₽",
    description: "Практические методы для активного управления своей реальностью. Как стать вершителем собственной судьбы.",
    format: "Бумажная книга",
    imageSrc: "https://placehold.co/300x450/1A1F2C/E5DEFF?text=Вершитель"
  },
  {
    id: 4,
    title: "Шелест утренних звёзд",
    author: "Вадим Зеланд",
    price: "1900 ₽",
    description: "Поэтическое осмысление принципов Трансерфинга. Философская основа взаимодействия человека и мироздания.",
    format: "Бумажная книга",
    imageSrc: "https://placehold.co/300x450/1A1F2C/E5DEFF?text=Шелест"
  },
  {
    id: 5,
    title: "Проектор отдельной реальности",
    author: "Вадим Зеланд",
    price: "2300 ₽",
    description: "Продвинутые техники для создания собственной версии реальности. Для опытных практиков Трансерфинга.",
    format: "Бумажная и электронная книга",
    imageSrc: "https://placehold.co/300x450/1A1F2C/E5DEFF?text=Проектор"
  },
  {
    id: 6,
    title: "Трансерфинг: Зеркало иллюзии",
    author: "Вадим Зеланд",
    price: "1950 ₽",
    description: "О том, как наши представления о мире создают иллюзорные барьеры, и как освободиться от них с помощью Трансерфинга.",
    format: "Электронная книга",
    imageSrc: "https://placehold.co/300x450/1A1F2C/E5DEFF?text=Зеркало"
  }
];

const BooksPage: React.FC = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <StarfieldBackground />
      <ParallaxSeaBackground />
      
      <div className="relative z-10">
        <Header />
        
        <main className="pt-12 pb-24 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <h1 className="text-4xl md:text-5xl font-light tracking-wide text-glow">
                Книги о Трансерфинге
              </h1>
              <p className="text-cosmic-muted text-lg font-extralight max-w-2xl mx-auto">
                Полное собрание литературы по Трансерфингу реальности. Оригинальные издания книг Вадима Зеланда с доставкой по всему миру.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {books.map((book) => (
                <div key={book.id} className="cosmic-blur rounded-xl overflow-hidden transition-transform duration-500 hover:translate-y-[-8px] group">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={book.imageSrc} 
                      alt={book.title} 
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-light">{book.title}</h3>
                    <p className="text-cosmic-muted/80 text-sm">Автор: {book.author}</p>
                    <p className="text-cosmic-muted text-sm">{book.description}</p>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-cosmic-accent font-medium">{book.price}</span>
                      <span className="text-cosmic-muted/60 text-sm">{book.format}</span>
                    </div>
                    <TransitionButton className="w-full mt-4 group">
                      <Book size={16} />
                      <span>Добавить в корзину</span>
                    </TransitionButton>
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

export default BooksPage;
