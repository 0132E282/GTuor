import React from 'react'
import { useClassnames } from '../../hooks'
import styles from './images.module.scss';
export interface ImagesProps  {
    src : string;
    classnames?: string;
}

const Images = ({src , classnames}: ImagesProps) => {
    const cx = useClassnames({styles})
  return (
   <div className={cx('images-wrapper')}>
     <div className={cx('bg-images',classnames)} style={{backgroundImage : `url(${src})`}}></div>
   </div>
  )
}

export default Images