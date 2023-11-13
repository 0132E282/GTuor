import {useState} from 'react'
import styles from './hero.module.scss'
import { useClassnames } from '../../hooks'
import { AiOutlineSearch , AiOutlineDown } from 'react-icons/ai';
import { CiCalendarDate } from 'react-icons/ci';
import { TbArrowsSort } from 'react-icons/tb';
import {BsChevronUp} from 'react-icons/bs';
import Button from '../Button';
const Hero = () => {
  const cx = useClassnames({styles});
  const [showSearch, SetShowSearch] = useState(false);
  return (
    <div className={cx('hero-wrapper')}>
      <div className={cx('bg-images')} style={{backgroundImage : 'url("https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-225630.jpeg")'}}></div>
       <div className={cx('hero-content')}>
       <div className={cx('container','ms:py-20')}>
         <div className={cx('hero-content-heading')}>
              <h1>Where do you want to go?</h1>
              <p>Trips, experiences, and places. All in one service</p>
          </div>
          <form className={cx('form-search')}>
            <div className={cx('search-wrapper','ms:flex-column')}>
               <div className={cx('input-item','w-1/4' , 'ms:w-full' ,'rounded-md')}>
                 <input type="text" placeholder='Destination, city' />
                 <span><AiOutlineSearch/></span>
               </div>
               <div className={cx('input-item','w-1/4' , 'ms:w-full','rounded-md')}>
                 <select id="month" name="month">
                      <option value="">Any Month</option>
                      <option value="january">January</option>
                      <option value="february">February</option>
                      <option value="march">March</option>
                      <option value="april">April</option>
                      <option value="may">May</option>
                      <option value="june">June</option>
                      <option value="july">July</option>
                      <option value="august">August</option>
                      <option value="september">September</option>
                      <option value="october">October</option>
                      <option value="november">November</option>
                      <option value="december">December</option>
                 </select>
                 <span><CiCalendarDate/></span>
               </div>
               <div className={cx('input-item','w-1/4' , 'ms:w-full','rounded-md')}>
                  <select id="sort_by" name="sort_by">
                    <option value="date">Sort By Date</option>
                    <option value="price_low">Price Low to High</option>
                    <option value="price_high">Price High to Low</option>
                    <option value="name">Sort By Name</option>
                    <option value="popular">Sort By Popularity</option>
                    <option value="review">Sort By Review Score</option>
                  </select>
                 <span><TbArrowsSort/></span>
               </div>
               <Button className={cx('btn-search', 'rounded-md')} primary>search</Button>
            </div>
            <div className={cx('search-wrapper',{flex : showSearch}, 'ms:flex-column')}>
               <div className={cx('input-item','w-1/4' , 'ms:w-full' ,'rounded-md')}>
                 <input type="text" placeholder='Destination, city' />
                 <span><AiOutlineSearch/></span>
               </div>
               <div className={cx('input-item','w-1/4' , 'ms:w-full','rounded-md')}>
                 <select id="month" name="month">
                      <option value="">Any Month</option>
                      <option value="january">January</option>
                      <option value="february">February</option>
                      <option value="march">March</option>
                      <option value="april">April</option>
                      <option value="may">May</option>
                      <option value="june">June</option>
                      <option value="july">July</option>
                      <option value="august">August</option>
                      <option value="september">September</option>
                      <option value="october">October</option>
                      <option value="november">November</option>
                      <option value="december">December</option>
                 </select>
                 <span><CiCalendarDate/></span>
               </div>
               <div className={cx('input-item','w-1/4' , 'ms:w-full','rounded-md')}>
                  <select id="sort_by" name="sort_by">
                    <option value="date">Sort By Date</option>
                    <option value="price_low">Price Low to High</option>
                    <option value="price_high">Price High to Low</option>
                    <option value="name">Sort By Name</option>
                    <option value="popular">Sort By Popularity</option>
                    <option value="review">Sort By Review Score</option>
                  </select>
                 <span><TbArrowsSort/></span>
               </div>
            </div>
            <Button className={cx('btn-show')} type={"button"} onClick={()=>{
              SetShowSearch(!showSearch);
            }}>
              <span> {showSearch ? <AiOutlineDown/> : <BsChevronUp/> } Advanced Search</span>
            </Button>
          </form>
       </div>
       </div>
    </div>
  )
}

export default Hero