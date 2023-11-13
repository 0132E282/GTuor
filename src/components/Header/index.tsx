import { useClassnames } from '../../hooks';
import HeaderDesktop from './Header-desktop';
import styles from './header.module.scss';
import { images } from '../../url';
const MENUS = [
  {
    id : 1,
    title: "home",
    url: '',
    children : [
      {
          id : 1,
        title: "Home 1 – Background Image",
        url: '',
        children : []
      },
      {
        id : 2,
        title: "Home 2 – Youtube",
        url: '',
        children : []
      },
      {
        id : 3,
        title: "Home 3 – Google Inspired",
        url: '',
        children : []
      },
      {
        id : 4,
        title: "Home 4 – Travel Site",
        url: '',
        children : []
      },
    ]
  },
  {
    id : 2,
    title: "Tours",
    url: '',
    children : [
     {
      id : 1,
      title: "Tour Classic Fullwidth",
      url: '',
      children : [
        {
          id : 1,
          title: "1 Columns",
          url: '',
          children : []
        },
        {
          id : 2,
          title: "2 Columns",
          url: '',
          children : []
        },
        {
          id :3,
          title: "3 Columns",
          url: '',
          children : []
        }
      ]
     },
     {
      id : 2,
      title: "Tour Classic Sidebar",
      url: '',
      children : []
     },
     {
      id : 3,
      title: "Tour Grid Fullwidth",
      url: '',
      children : []
     },
     {
      id : 4,
      title: " Tour Grid Sidebar",
      url: '',
      children : []
     },
     {
      id : 5,
      title: " Tour List Sidebar",
      url: '',
      children : []
     },
     {
      id : 6,
      title: " Tour Header Type",
      url: '',
      children : []
     },
     {
      id : 7,
      title: "Tour Categories",
      url: '',
      children : []
     },
    ]
  },
  {
    id : 3,
    title: "Booking",
    url: '',
    children : [
      {
        id : 1,
        title: "Online Payment for Booking",
        url: '',
      },
      {
        id : 2,
        title: "Variable Tour Pricing",
        url: '',
      },
      {
        id : 3,
        title: " Simple Tour Pricing",
        url: '',
      }, {
        id : 4,
        title: "Custom Booking Form",
        url: '',
      }, {
        id : 5,
        title: "Tour Durations",
        url: '',
      },{
        id : 6,
        title: "Custom Booking URL for Affiliate Tour",
        url: '',
      },{
        id : 7,
        title: "Custom Booking using custom HTML & Shortcode",
        url: '',
      },{
        id : 8,
        title: "Header Options",
        url: '',
      },{
        id : 9,
        title: "Layout Options",
        url: '',
      }    
    ]
  },
  {
    id : 6,
    title: "Destinations",
    url: '',
    children : []
  },
  {
    id : 7,
    title: "Pages",
    url: '',
    children : []
  },
  {
    id : 8,
    title: " Blog",
    url: '',
    children : []
  },
  {
    id : 9,
    title: "Shortcodes",
    url: '',
    children : []
  },
  {
    id : 10,
    title: "Shop",
    url: '',
    children: []
  },
]
const Header = ({isScroll}:{isScroll : boolean}) => {
  const cx = useClassnames({styles});
  return (
    <div className={cx('container')}>
        <HeaderDesktop logo={isScroll ? images.logoDark : images.logoLight} menusList={MENUS}/>
    </div>
  )
}

export default Header