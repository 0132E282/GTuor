import React from 'react'
import { useClassnames } from '../../../hooks'
import styles from './card-blog.module.scss';
import Button from '../../Button';
import { GrFormNext } from 'react-icons/gr';
const CardBlog = () => {
    const cx = useClassnames({styles})
  return (
    <div className={cx('card-blog_wrapper' , 'rounded-md')}>
      <div className={cx('card-blog_header','rounded-md')}>
         <a href="">
            <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/photo-1469920783271-4ee08a94d42d-960x636.jpg" alt="" />
         </a>
      </div>
      <div className={cx('card-blog_body')}>
        <p className={cx('card-body_date')}>DECEMBER 10, 2016</p>
        <h3><a className={cx('line-clamp-2')} href="">Memorial Day to Someone Told Me to Travel</a></h3>
        <p className={cx('card-body_content' , 'line-clamp-2')}>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...</p>
       <Button className={cx('btn-read-more')}><span>Read More <GrFormNext/></span></Button>
      </div>
    </div>
  )
}

export default CardBlog