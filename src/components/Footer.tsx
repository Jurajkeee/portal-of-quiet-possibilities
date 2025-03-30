
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-cosmic-accent/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-cosmic-muted text-sm">
            © 2024 Портал Трансерфинга
          </div>
          
          <div className="flex items-center space-x-8">
            <a href="#" className="text-cosmic-muted text-sm hover:text-cosmic-foreground transition-colors duration-300">
              Контакты
            </a>
            <a href="#" className="text-cosmic-muted text-sm hover:text-cosmic-foreground transition-colors duration-300">
              О методе
            </a>
            <a href="#" className="text-cosmic-muted text-sm hover:text-cosmic-foreground transition-colors duration-300">
              Конфиденциальность
            </a>
          </div>
        </div>
        
        <p className="text-cosmic-muted/60 text-xs mt-8 text-center md:text-left">
          "Трансерфинг реальности" — зарегистрированный товарный знак Вадима Зеланда. 
          Материалы предоставлены исключительно в информационных целях.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
