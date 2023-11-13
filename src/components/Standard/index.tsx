import React from 'react'
import styles from './standard.module.scss';
import { useClassnames } from '../../hooks';
import CardStandard from '../card/Card-standard';

const Standard = () => {
    const cx = useClassnames({styles});
  return (
    <div className={cx('standard_wrapper')}>
        <div className="container">
            <div className={'section-heading'}>
                <h2>Why Choose Us</h2>
                <p>Here are reasons you should plan trip with us</p>
            </div>
            <div className={cx('grid' , 'col-3' , 'gap-30' , 'mt-50' , 'ms:col-1')}>
                <CardStandard/>
                <CardStandard/>
                <CardStandard/>
            </div>
        </div>
    </div>
  )
}

export default Standard