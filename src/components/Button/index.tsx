import React from 'react'
import styles from './Button.module.scss';
import { useClassnames } from '../../hooks';

export interface ButtonProps  {
    children: JSX.Element | string;
    className?: string;
    primary ? : boolean;
    onClick?: () => void;
    type ? : "button" | "submit" | "reset" | undefined;
}

const Button = ({children,type , className,onClick,primary, ...option}: ButtonProps) => {
  const cx = useClassnames({styles});
  return (
    <button type={type} className={cx('btn',{'btn-primary' : primary},className)} onClick={onClick} {...option}>{children}</button>
  )
}

export default Button