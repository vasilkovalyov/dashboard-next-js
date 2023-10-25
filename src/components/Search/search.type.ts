import { InputHTMLAttributes } from 'react';

export type SearchProps = {
  className?: string;
  onSubmit: (value: string) => void;
} & Omit<Partial<InputHTMLAttributes<HTMLInputElement>>, 'onSubmit'>;
