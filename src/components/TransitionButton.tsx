
import React from 'react';
import { cn } from '@/lib/utils';

interface TransitionButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  glow?: boolean;
  href?: string;
  variant?: 'default' | 'amber' | 'ruby';
}

const TransitionButton: React.FC<TransitionButtonProps> = ({ 
  children, 
  onClick, 
  className,
  glow = false,
  href,
  variant = 'default'
}) => {
  const ButtonComponent = href ? 'a' : 'button';
  
  return (
    <ButtonComponent
      href={href}
      onClick={onClick}
      className={cn(
        'cosmic-button',
        variant === 'default' && 'bg-cosmic-accent/10 hover:bg-cosmic-accent/20 border-cosmic-accent/20 hover:border-cosmic-accent/40',
        variant === 'amber' && 'bg-cosmic-amber/10 hover:bg-cosmic-amber/20 border-cosmic-amber/20 hover:border-cosmic-amber/40 text-cosmic-amber/90',
        variant === 'ruby' && 'bg-cosmic-ruby/10 hover:bg-cosmic-ruby/20 border-cosmic-ruby/20 hover:border-cosmic-ruby/40 text-cosmic-ruby/90',
        glow && variant === 'default' && 'shadow-[0_0_15px_rgba(30,129,243,0.4)]',
        glow && variant === 'amber' && 'shadow-[0_0_15px_rgba(249,115,22,0.3)]',
        glow && variant === 'ruby' && 'shadow-[0_0_15px_rgba(234,56,76,0.3)]',
        className
      )}
    >
      {children}
    </ButtonComponent>
  );
};

export default TransitionButton;
