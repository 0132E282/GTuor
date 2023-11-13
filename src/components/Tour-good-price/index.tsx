import { lazy } from "react";
import { useClassnames } from "../../hooks"
import styles from './tuor-good-price.module.scss';
const CardProduct = lazy(() => import('../card/card-product'));
const TourGoodPrice = () => {
  const cx = useClassnames({styles});
  return (
    <div className={cx('tour-price_wrapper')}>
        <div className="container">
        <div className={'section-heading'}>
            <h2>Best Value Trips</h2>
            <p>Best offers trips from us</p>
         </div>
         <div className={cx( 'mt-50','grid','col-3' , 'gap-30','ms:col-1')}>
            <CardProduct/>
            <CardProduct/>
            <CardProduct/>
         </div>
        </div>
    </div>
  )
}

export default TourGoodPrice