import { useClassnames } from "../../hooks"
import styles from './offcanvas.module.scss';
type Props = {
    children: JSX.Element;
    isOpen: boolean;
}

const Offcanvas = ({children , isOpen}: Props) => {
 const cx = useClassnames({styles})
  return (
    <div className={cx('offcanvas-wrapper',{open : isOpen})}>
      <div className={cx('offcanvas-content')}>
        {children}
      </div>
    </div>
  )
}

export default Offcanvas