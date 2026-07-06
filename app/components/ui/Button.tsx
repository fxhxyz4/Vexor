'use client';

import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react';
import './Button.css';

type Variant = 'primary' | 'ghost' | 'icon';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  icon?: ReactNode;
  style?: CSSProperties;
}

export function Button({
  variant = 'ghost',
  icon,
  className = '',
  children,
  style,
  ...rest
}: ButtonProps) {
  return (
    <button className={`ui-btn ui-btn--${variant} ${className}`} style={style} {...rest}>
      {icon}
      {children}
    </button>
  );
}
