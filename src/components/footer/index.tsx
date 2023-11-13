import React from 'react'
import { useClassnames } from '../../hooks'
import styles from './footer.module.scss';
import FooterItem from '../footer-item';
import { BsPhone } from 'react-icons/bs';
import { FaBusinessTime } from 'react-icons/fa';
import { TfiLocationPin } from 'react-icons/tfi';

const Footer = () => {
    const cx = useClassnames({styles})
  return (
    <div className={cx('footer-wrapper')}>
       <div className={cx('footer-header')}>
            <div className="container">
                <div className="grid col-3 gap-30 ms:col-1">
                    <FooterItem title='Our Awards'>
                        <div className={cx('text-content')}>
                           <p>Our Awards London is a megalopolis of people, ideas and frenetic energy. The capital and largest city of the United Kingdom.</p>
                           <img className={cx('images')} src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/awards.png" alt="" />
                        </div>
                    </FooterItem>
                    <FooterItem title='Contact Info'>
                        <div className={cx('info-website')}>
                            <div className={cx('info-website_list')}>
                                <div className={cx('info-website_item')}>
                                    <span><BsPhone/></span>
                                    <p>1-567-124-44227</p>
                                </div>
                                <div className={cx('info-website_item')}>
                                    <span><TfiLocationPin/></span>
                                    <p>184 Main Street East Perl Habour 8007</p>
                                </div>
                                <div className={cx('info-website_item')}>
                                    <span><FaBusinessTime/></span>
                                    <p>Mon - Sat 8.00 - 18.00 Sunday CLOSED</p>
                                </div>
                            </div>
                            <ul className={cx('icon_list')}>
                                <li><a href=""></a></li>
                            </ul>
                        </div>
                    </FooterItem>
                    <FooterItem title='Recent Trips'>
                        <ul className={cx('images_list' ,'grid' , 'col-3' , 'gap-7')}>
                            <li><a href=""><img className='rounded-md' src="https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg" alt="" /></a></li>
                            <li><a href=""><img className='rounded-md' src="https://live.staticflickr.com/7519/27308262031_a6ebf0572e_q.jpg" alt="" /></a></li>
                            <li><a href=""><img className='rounded-md' src="https://live.staticflickr.com/7160/27287965356_60355f51d7_q.jpg" alt="" /></a></li>
                            <li><a href=""><img className='rounded-md' src="https://live.staticflickr.com/7365/27138570412_d25002a5c9_q.jpg" alt="" /></a></li>
                            <li><a href=""><img className='rounded-md' src="https://live.staticflickr.com/7543/26520497604_1df03a02bc_q.jpg" alt="" /></a></li>
                            <li><a href=""><img className='rounded-md' src="https://live.staticflickr.com/7502/27012097142_f1511b67bc_q.jpg" alt="" /></a></li>
                        </ul>
                    </FooterItem>
                </div>
            </div>
       </div>
       <div className={cx('footer-end')}>
            <div className="container ms:py-0">
                <div className={cx('footer-end_wrapper')}>
                    <p className={cx('copyright')}>© Copyright Grand Tour Theme Demo - Theme by ThemeGoods</p>
                    <ul className={cx('footer_menu')}>
                        <li><a href="">Home</a></li>
                        <li><a href="">Tours</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Purchase</a></li>
                        <li><a href="">Theme</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer