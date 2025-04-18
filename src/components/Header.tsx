
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="pt-6 pb-8 px-6 md:px-12 flex justify-between items-center">
      <div className="text-cosmic-foreground font-light tracking-wider text-lg">
        <Link to="/">ТРАНСЕРФИНГ</Link>
      </div>
      <nav className="hidden md:block">
        <ul className="flex space-x-8 text-sm font-light text-cosmic-muted">
          <li className="hover:text-cosmic-foreground transition-colors duration-300">
            <Link to="/course">Курс</Link>
          </li>
          <li className="hover:text-cosmic-foreground transition-colors duration-300">
            <Link to="/books">Книги</Link>
          </li>
          <li className="hover:text-cosmic-foreground transition-colors duration-300">
            <Link to="/audio">Аудио</Link>
          </li>
          <li className="hover:text-cosmic-foreground transition-colors duration-300">
            <a href="/#newsletter">Рассылка</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
