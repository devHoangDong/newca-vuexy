import { Mail, Home, Search, Book, ShoppingBag, HelpCircle } from 'react-feather'

export default [
  {
    id: 'home',
    title: 'DashBoard',
    type: "item",
    icon: <Home size={20} />,
    navLink: '/home'
  },
  {
    id: 'secondPage',
    title: 'Tra cứu dịch vụ',
    type: "item",
    icon: <Search size={20} />,
    navLink: '/second-page'
  },
  {
    id: 'thirdPage',
    title: 'Sản phẩm',
    type: "item",
    icon: <ShoppingBag size={20} />,
    navLink: '/third-page'
  },
  {
    id: 'fourthPage',
    title: 'Yêu cầu dịch vụ',
    type: "item",
    icon: <Book size={20} />,
    navLink: '/fourth-page'
  },
  {
    id: 'fifthPage',
    title: 'Hỗ trợ',
    type: "item",
    icon: <HelpCircle size={20} />,
    navLink: '/fifth-page'
  },
]
