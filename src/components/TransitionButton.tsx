
import React from 'react';
import { cn } from '@/lib/utils';

interface TransitionButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  glow?: boolean;
  href?: string;
}

const TransitionButton: React.FC<TransitionButtonProps> = ({ 
  children, 
  onClick, 
  className,
  glow = false,
  href
}) => {
  const ButtonComponent = href ? 'a' : 'button';
  
  return (
    <ButtonComponent
      href={href}
      onClick={onClick}
      className={cn(
        'cosmic-button',
        glow && 'shadow-[0_0_15px_rgba(214,188,250,0.3)]',
        className
      )}
    >
      {children}
    </ButtonComponent>
  );
};

export default TransitionButton;
