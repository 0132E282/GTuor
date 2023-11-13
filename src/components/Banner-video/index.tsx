import React from 'react'
import { videos } from '../../url'
import { useClassnames } from '../../hooks'
import styles from './bannerVideo.module.scss';


const BannerVideo = () => {
    const cx = useClassnames({styles})
  return (
    <div className={cx('banner-wrapper')}>
        <video className={cx('banner-video')} autoPlay={true} loop muted  >
          <source src={videos.videoBanner}/>
        </video>
    </div>
  )
}

export default BannerVideo