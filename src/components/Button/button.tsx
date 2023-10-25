import Link from 'next/link';
import cn from 'classnames';
import styles from './button.module.scss';

import { ButtonProps } from './button.type';

export default function Button({ href, children, className }: ButtonProps) {
  const baseClassname = cn(styles['button'], className);

  if (href) {
    return (
      <Link className={cn(baseClassname, 'button--linked')} href={href}>
        {children}
      </Link>
    );
  }

  return <button className={baseClassname}>{children}</button>;
}
