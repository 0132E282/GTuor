import React from 'react'
import { useClassnames } from '../../hooks'
import styles from './popular-destinations.module.scss';
import { CardBanner } from '../card';
const bannerList = [
  {
    title : 'Tokyo',
    url : '',
    img : 'https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Tokyo_Dollarphotoclub_72848283-copy-700x466.jpg',
  },
  {
    title : 'Seoul',
    url : '',
    img : 'https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/bf1202aedf2c5b6a57d379575619a488-700x466.jpg',
  },
  {
    title : 'Paris',
    url : '',
    img : 'https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/1600x1200-4-700x466.jpg',
  },
  {
    title : 'London',
    url : '',
    img : 'https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-1-700x466.jpg',
  },
]
const PopularDestinations = () => {
  const cx = useClassnames({styles})
  return (
    <div className={cx('popular-wrapper','ms:m-0')}>
      <div className={'container '}>
         <div className={'section-heading'}>
            <h2>Popular Destinations</h2>
            <p>World's best tourist destinations</p>
         </div>
         <div className={cx( 'banner-group','grid', 'col-4' , 'gap-30' , 'ms:m-0' , 'ms:col-1')}>
            {bannerList.map((banner , index) =><CardBanner key={index} banner={banner}/> )}
         </div>
      </div>
    </div>
  )
}

export default PopularDestinations