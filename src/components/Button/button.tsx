import Link from 'next/link';
import cn from 'classnames';
import styles from './button.module.scss';

import { ButtonProps } from './button.type';

export default function Button({
  href,
  children,
  className,
  variant,
  fullwidth = false,
  size = 'small',
  ...rest
}: ButtonProps) {
  const buttonVariantClassnames = cn({
    [styles['button--outlined']]: variant === 'outlined',
    [styles['button--text']]: variant === 'text',
  });

  const buttonSizeClassnames = cn({
    [styles['button--small']]: size === 'small',
    [styles['button--middle']]: size === 'middle',
    [styles['button--large']]: size === 'large',
  });

  const baseClassname = cn(
    styles['button'],
    buttonVariantClassnames,
    buttonSizeClassnames,
    { [styles['button--fullwidth']]: fullwidth },
    className
  );

  if (href) {
    return (
      <Link className={cn(baseClassname, 'button--linked')} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={baseClassname} {...rest}>
      {children}
    </button>
  );
}
