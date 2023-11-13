import React from 'react'
import { useClassnames } from '../../hooks'
import styles from './footer-item.module.scss';
import { ComponentProps } from '../../model/common/componentsProps';
export interface FooterContentProps extends ComponentProps {
    title : string;
}

const FooterItem = ({title,children , className}:FooterContentProps) => {
  const cx = useClassnames({styles})  
  return (
    <div className={cx('footer-item_wrapper',className)}>
        <h3>{title}</h3>
        <div className={cx('footer-item_content')}>
            {children}
        </div>
    </div>
  )
}

export default FooterItem