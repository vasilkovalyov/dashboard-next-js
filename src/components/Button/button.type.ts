import { ButtonHTMLAttributes } from 'react';

export type ButtonVariantType = 'outlined' | 'text';
export type ButtonSizeType = 'small' | 'middle' | 'large';

export type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  href?: string;
  size?: ButtonSizeType;
  variant?: ButtonVariantType;
  fullwidth?: boolean;
} & Partial<ButtonHTMLAttributes<HTMLButtonElement>>;
