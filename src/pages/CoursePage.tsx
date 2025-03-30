
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StarfieldBackground from '@/components/StarfieldBackground';
import ParallaxSeaBackground from '@/components/ParallaxSeaBackground';
import TransitionButton from '@/components/TransitionButton';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const CoursePage: React.FC = () => {
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
                Онлайн-курс Трансерфинга
              </h1>
              <p className="text-cosmic-muted text-lg font-extralight max-w-2xl mx-auto">
                Регистрация на интенсивный курс по Трансерфингу реальности. Начинаем практиковать управление реальностью вместе с опытными наставниками.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
              <div className="space-y-6">
                <div className="cosmic-blur rounded-xl p-8 space-y-4">
                  <h2 className="text-2xl font-light">О курсе</h2>
                  <ul className="space-y-4 text-cosmic-muted">
                    <li className="flex items-start">
                      <span className="text-cosmic-accent mr-2">•</span>
                      <p>8 недель интенсивного обучения с практическими заданиями</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cosmic-accent mr-2">•</span>
                      <p>Еженедельные групповые звонки с разбором ваших вопросов</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cosmic-accent mr-2">•</span>
                      <p>Персональный наставник на весь период обучения</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cosmic-accent mr-2">•</span>
                      <p>Доступ к закрытому сообществу практиков Трансерфинга</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cosmic-accent mr-2">•</span>
                      <p>Набор медитаций и аудиопрактик для самостоятельной работы</p>
                    </li>
                  </ul>
                  <div className="pt-4">
                    <p className="text-xl font-light text-cosmic-accent">Стоимость: 45 000 ₽</p>
                    <p className="text-cosmic-muted/60 text-sm mt-1">При регистрации до 1 мая — скидка 15%</p>
                  </div>
                </div>
                
                <div className="cosmic-blur rounded-xl p-8 space-y-4">
                  <h2 className="text-2xl font-light">Ближайший поток</h2>
                  <div className="space-y-2">
                    <p className="text-cosmic-muted">Старт занятий: <span className="text-cosmic-foreground">15 мая 2024</span></p>
                    <p className="text-cosmic-muted">Продолжительность: <span className="text-cosmic-foreground">8 недель</span></p>
                    <p className="text-cosmic-muted">Осталось мест: <span className="text-cosmic-accent">7 из 20</span></p>
                  </div>
                </div>
              </div>
              
              <div className="cosmic-blur rounded-xl p-8 space-y-6">
                <h2 className="text-2xl font-light text-center">Регистрация на курс</h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя и фамилия</Label>
                    <Input 
                      id="name" 
                      placeholder="Введите ваше имя и фамилию" 
                      className="bg-cosmic-accent/5 border-cosmic-accent/20 focus:border-cosmic-accent/40"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Введите ваш email" 
                      className="bg-cosmic-accent/5 border-cosmic-accent/20 focus:border-cosmic-accent/40"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input 
                      id="phone" 
                      placeholder="+7 (___) ___-__-__" 
                      className="bg-cosmic-accent/5 border-cosmic-accent/20 focus:border-cosmic-accent/40"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="experience">Опыт в Трансерфинге</Label>
                    <Input 
                      id="experience" 
                      placeholder="Расскажите о вашем опыте (если есть)" 
                      className="bg-cosmic-accent/5 border-cosmic-accent/20 focus:border-cosmic-accent/40"
                    />
                  </div>
                </div>
                
                <div className="pt-6">
                  <TransitionButton glow={true} className="w-full">
                    Забронировать место на курс
                  </TransitionButton>
                  <p className="text-cosmic-muted/60 text-sm mt-4 text-center">
                    Отправляя форму, вы соглашаетесь с условиями конфиденциальности и обработки персональных данных
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default CoursePage;
