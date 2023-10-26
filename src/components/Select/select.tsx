import cn from 'classnames';
import { SelectProps } from './select.type';
import styles from './select.module.scss';

export default function Select({ className, options, ...rest }: SelectProps) {
  return (
    <select {...rest} className={cn(styles['select'], className)}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
}
