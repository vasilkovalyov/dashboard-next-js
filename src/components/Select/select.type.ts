import { SelectHTMLAttributes } from 'react';

export type SelectProps = {
  className?: string;
  options: SelectOption[];
} & Partial<SelectHTMLAttributes<HTMLSelectElement>>;

export type SelectOption = {
  name: string;
  value: string;
};
