import React from 'react'
import { useClassnames } from '../../../hooks'
import styles  from './card-standard.module.scss';

const CardStandard = () => {
  const cx = useClassnames({styles})
  return (
    <div className={cx('standard-wrapper')}>
        <div className={cx('standard-header')}>
            <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Map-Marker-300x300.png" alt="" />
        </div>
        <div className={cx("standard-body")}>
            <h3><a href="">Handpicked Hotels</a></h3>
            <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa</p>
        </div>
    </div>
  )
}

export default CardStandard