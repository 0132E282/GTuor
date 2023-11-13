import React from 'react'
import { useClassnames } from '../../../hooks'
import styles from './card-banner.module.scss';
import { Banner } from '../../../model';

export interface BannerProps {
    banner : Banner
} 
const CardBanner = ({banner}:BannerProps) => {
    const cx = useClassnames({styles})
  return (
    <div className={cx('card-banner' , 'rounded-md')}>
       <a href={banner.url}>
            <div className={cx('bg-images')} style={{backgroundImage:'url('+banner.img+')'}}></div>
            <p>{banner.title}</p>
       </a>
    </div>
  )
}

export default CardBanner