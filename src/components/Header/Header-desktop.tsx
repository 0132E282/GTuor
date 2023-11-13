import styles from './header.module.scss';
import { useClassnames } from '../../hooks';
import {useState} from 'react';
import { menusProps } from './../../model/common/header';
import Submenus from './Submenus';
import { AiOutlineDown , AiOutlineMenu , AiOutlineShoppingCart} from 'react-icons/ai';
import Button from '../Button';
import HeaderMobile from './Header-mobile';
export interface HeaderProps {
  menusList : menusProps[];
  logo : string;
}
const HeaderDesktop = ({menusList,logo}:HeaderProps) => {
  const cx = useClassnames({styles});
  const [isOpen , setIsOpen] = useState(false);
  const HandlerOpenModel = function(){
    setIsOpen(!isOpen);
  }
  return (
    <nav className={cx('navbar')}>
        <div className={cx('nav-logo')}>
            <img src={logo} alt="logo" />
        </div>
        <div className={cx('nav-right')}>
          <ul className={cx('nav-right_menus','ms:none')}>
             {menusList.map(menu =>{
              if(menu.children?.length){
                return<li key={menu.id} className={cx('menus-item')}><a href={menu.url}>{menu.title} 
                <AiOutlineDown classnames={cx('icon-dropdown')}/>
                </a>
                  <Submenus menusList={menu.children}/>
                </li> 
              }
              return <li key={menu.id} className={cx('menus-item')}><a href={menu.url}>{menu.title}</a></li> 
             })}
          </ul>
          <div className={cx('nav-end')}>
             <Button className={'btn-menus' } onClick={HandlerOpenModel}><AiOutlineMenu/></Button>
              <div className={cx('cart')}>
                <Button><AiOutlineShoppingCart/></Button>
              </div>
          </div>
        </div>
        <HeaderMobile isOpen={isOpen}  menusList={menusList} closeModel={HandlerOpenModel}/>
    </nav>
  )
}

export default HeaderDesktop