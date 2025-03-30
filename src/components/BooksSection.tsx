
import React from 'react';
import TransitionButton from './TransitionButton';

interface Book {
  id: number;
  title: string;
  format: string;
  imageSrc: string;
}

const books: Book[] = [
  {
    id: 1,
    title: "Трансерфинг реальности. Ступень I-V",
    format: "Бумажная книга",
    imageSrc: "https://placehold.co/300x450/1A1F2C/E5DEFF?text=Ступень+I-V"
  },
  {
    id: 2,
    title: "Апокрифический Трансерфинг",
    format: "Электронная книга",
    imageSrc: "https://placehold.co/300x450/1A1F2C/E5DEFF?text=Апокрифический"
  },
  {
    id: 3,
    title: "Вершитель реальности",
    format: "Бумажная книга",
    imageSrc: "https://placehold.co/300x450/1A1F2C/E5DEFF?text=Вершитель"
  }
];

const BooksSection: React.FC = () => {
  return (
    <section id="books" className="section-spacing px-6 md:px-12 cosmic-gradient">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-6 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide">
            Книги
          </h2>
          <p className="text-cosmic-muted text-lg font-extralight max-w-2xl mx-auto">
            Оригинальные издания книг Вадима Зеланда, раскрывающие концепцию управления реальностью и путь к намерению.
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
              <div className="p-5">
                <h3 className="text-lg font-light">{book.title}</h3>
                <p className="text-cosmic-muted text-sm mt-1">{book.format}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center pt-8">
          <TransitionButton to="/books">
            Смотреть все книги
          </TransitionButton>
        </div>
      </div>
    </section>
  );
};

export default BooksSection;
