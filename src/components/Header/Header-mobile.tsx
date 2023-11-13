import React from 'react'
import Offcanvas from '../Offcanvas'
import { useClassnames } from '../../hooks'
import styles  from './header.module.scss';
import Button from '../Button';
import { AiOutlineClose } from 'react-icons/ai';
import { FaYoutube } from 'react-icons/fa';
import { menusProps } from '../../model';
import CardProduct from '../card/card-product';
export interface HeaderMobileProps {
  menusList : menusProps[];
  isOpen ?: boolean;
  closeModel : () => void;
}
const HeaderMobile = ({menusList ,isOpen , closeModel}:HeaderMobileProps) => {
  const cx = useClassnames({styles});
  return (
    <Offcanvas isOpen={isOpen ?? false}>
      <div className={cx('header-mobile-wrapper')}>
         <Button className={cx('btn-close' , 'rounded-full')} onClick={closeModel}><AiOutlineClose/></Button>
         <div className={cx('menus')}>
            <ul className={cx('menus-list')}>
                {menusList.map(menu => <li><a href="">{menu.title}</a></li>)}
            </ul>
         </div>
         <div className={cx('page-content')}>
            <div className={cx('grid', 'col-1' , 'gap-20')}>
              <CardProduct/>
              <CardProduct/>
            </div>
         </div>
         <div className={cx('social')}>
            <ul className={cx('social-list')}>
                <li className={cx('social-item')}><a href=""><FaYoutube/></a></li>
                <li className={cx('social-item')}><a href=""><FaYoutube/></a></li>
                <li className={cx('social-item')}><a href=""><FaYoutube/></a></li>
                <li className={cx('social-item')}><a href=""><FaYoutube/></a></li>
                <li className={cx('social-item')}><a href=""><FaYoutube/></a></li>
            </ul>
         </div>
      </div>
    </Offcanvas>
  )
}

export default HeaderMobile