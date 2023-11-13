import { Header, PopularDestinations, Standard, TourGoodPrice } from '../components'
import styles from './home.module.scss';
import {useClassnames} from '../hooks';
import Hero from '../components/Hero';
import BannerVideo from '../components/Banner-video';
import BlogPages from '../components/Blog-pages';
import Footer from '../components/footer';
import { useEffect, useState } from 'react';
const Home = () => {
    const cx = useClassnames({styles});
    const [isScroll , setIsScroll] = useState(false);
    useEffect(()=>{
      window.addEventListener('scroll',()=>{
        window.scrollY > 100 ? setIsScroll(true) : setIsScroll(false);
      })
      return ()=>{
        window.removeEventListener('scroll',()=>{});
      }
    },[])
  return (
    <>
      <header className={cx('header',{'scroll' : isScroll})} >
        <Header isScroll={isScroll}/>
      </header>
      <article className={cx('hero')}>
        <Hero/>
      </article>
      <article className={cx('content')}>
         <PopularDestinations/>
         <TourGoodPrice/>
          <Standard/>
         <BannerVideo/>
         <BlogPages/>
      </article>
      <footer className={cx('footer')}>
         <Footer/>
      </footer>
    </>
  )
}

export default Home