import { useClassnames } from "../../hooks";
import styles from './blog-pages.module.scss';
import { lazy } from 'react';
const CardBlog = lazy(() => import('../card/Card-blog'));
const BlogPages = () => {
    const cx = useClassnames({styles})
  return (
    <div className={cx('blog-wrapper')}>
        <div className="container">
            <div className={'section-heading'}>
                <h2>Articles & Tips</h2>
                <p>Explore some of the best tips from around the world</p>
            </div>
            <div className={cx('grid', 'col-3' , 'mt-50' , 'gap-30' , 'ms:col-1')}>
                 <CardBlog/>
                 <CardBlog/>
                 <CardBlog/>
            </div>
        </div>
    </div>
  )
}

export default BlogPages