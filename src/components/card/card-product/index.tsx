import React from 'react'
import { useClassnames } from '../../../hooks'
import styles from './card-product.module.scss';
import { AiOutlineStar } from 'react-icons/ai';
import { MdUpdate } from 'react-icons/md';

import { Products } from '../../../model/products';
export interface CardProductProps {
    product?: Products;
    cardImage ?: boolean;
}
const CardProduct = ({cardImage}:CardProductProps) => {
    const cx = useClassnames({styles})
  return (
    <div className={cx('card-wrapper','rounded-md',{'card-image-overlays' : cardImage})}>
        <div className={cx('card-header')}>
            <a href="">
                <div className={cx('bg-header-images')}>
                    <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-211051-700x466.jpeg" alt="" />
                </div>
            </a>
            <div className={cx('card-price')}>
                <del>$3,000</del>
                <span>$3,900</span>
            </div>
        </div>
        <div className={cx('card-body')}>
            <h5>Swiss Alps Trip</h5>
            <p>City Tours, Urban</p>
            <div className={cx('attribute')}>
                <div className={cx('rating')}>
                    <ul className={cx('widget')}>
                        <li><AiOutlineStar/></li>
                        <li><AiOutlineStar/></li>
                        <li><AiOutlineStar/></li>
                        <li><AiOutlineStar/></li>
                        <li><AiOutlineStar/></li>
                    </ul>
                    <span className={cx('rating-count')}>4 reviews</span>
                </div>
                <div className={cx('date')}>
                    <span className={cx('icon-date')}><MdUpdate/></span>
                     5 days
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardProduct