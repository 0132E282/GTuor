import { menusProps } from '../../model'
import { useClassnames } from '../../hooks';
import styles from './header.module.scss';
import { GrFormNext } from 'react-icons/gr';

export interface SubmenusProps {
    menusList : menusProps[]; 
}
const Submenus = ({menusList}: SubmenusProps) => {
    const cx = useClassnames({styles});
    return (<ul className={cx('submenus' , 'rounded-md')}>
    {menusList.map((item) => {
        if(item.children?.length ) { 
            return  <li key={item.id} className={cx('submenus-item')}><a href={item.url}>{item.title}
            <GrFormNext/>
            </a>
             <Submenus menusList={item.children} />
            </li> 
        }
       return  <li key={item.id} className={cx('submenus-item')}><a href={item.url}>{item.title}</a></li> 
    })}
</ul>)
}

export default Submenus