
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!email || !email.includes('@')) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, введите корректный email",
        variant: "destructive",
      });
      return;
    }
    
    // Here you would typically submit to an API
    toast({
      title: "Спасибо за подписку",
      description: "Вы успешно подписались на рассылку",
    });
    
    setEmail('');
  };
  
  return (
    <section id="newsletter" className="section-spacing px-6 md:px-12">
      <div className="max-w-3xl mx-auto cosmic-blur rounded-2xl p-8 md:p-12">
        <div className="text-center space-y-6 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-light tracking-wide">
            Подписка на поток инсайтов
          </h2>
          <p className="text-cosmic-muted text-base font-extralight max-w-xl mx-auto">
            Регулярные письма с размышлениями о Трансерфинге, практическими советами и эксклюзивными материалами от исследователей метода.
          </p>
          
          <form onSubmit={handleSubmit} className="pt-4 max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ваш email"
                className="flex-grow py-3 px-4 bg-cosmic-accent/5 border border-cosmic-accent/20 rounded-full focus:outline-none focus:border-cosmic-accent/50 text-cosmic-foreground"
              />
              <button 
                type="submit"
                className="cosmic-button whitespace-nowrap"
              >
                Подписаться
              </button>
            </div>
            <p className="text-cosmic-muted/60 text-xs mt-3">
              Никакого спама. Только ценные материалы. Отписка в один клик.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
