import {
  Mail,
  Home,
  Search,
  Book,
  ShoppingBag,
  HelpCircle,
  Circle,
  Server,
  Tool,
  DollarSign,
  Clock,
  Bookmark,
  Star,
  Settings,
  Info,
  ShoppingCart,
} from "react-feather";
/* eslint import/no-anonymous-default-export: [2, {"allowArray": true}] */
export default [
  {
    id: "home",
    title: "",
    type: "item",
    icon: <Home size={20} />,
    navLink: "/home",
  },
  {
    id: "management",
    title: "Quản lý dịch vụ",
    type: "collapse",
    icon: <Tool size={20} />,
    badge: "warning",
    navLink: "/manage-general",
    badgeText: "8",
    children: [
      {
        id: "edocmanage",
        title: "Chứng thư số",
        type: "item",
        icon: <Circle size={12} />,
        // permissions: ["admin"],
        navLink: "/manage-cts",
      },
      {
        id: "digibillmanage",
        title: "Hóa đơn điện tử",
        type: "item",
        icon: <Circle size={20} />,
        // permissions: ["admin", "editor"],
        navLink: "",
      },
      {
        id: "digiinsurancemanage",
        title: "BHXH điện tử",
        type: "item",
        icon: <Circle size={20} />,
        // permissions: ["admin", "editor"],
        navLink: "",
      },
      {
        id: "serviceaccountantmanage",
        title: "Dịch vụ kế toán",
        type: "item",
        icon: <Circle size={20} />,
        // permissions: ["admin", "editor"],
        navLink: "",
      },
      {
        id: "accountantsoftmanage",
        title: "Phần mềm kế toán",
        type: "item",
        icon: <Circle size={20} />,
        // permissions: ["admin", "editor"],
        navLink: "",
      },
      {
        id: "digiregistermanage",
        title: "Dịch vụ đăng ký kinh doanh",
        type: "item",
        icon: <Circle size={20} />,
        // permissions: ["admin", "editor"],
        navLink: "",
      },
      {
        id: "insuranceservicemanage",
        title: "Dịch vụ bảo hiểm",
        type: "item",
        icon: <Circle size={20} />,
        // permissions: ["admin", "editor"],
        navLink: "",
      },
      {
        id: "digicustommanage",
        title: "Hải quan điện tử",
        type: "item",
        icon: <Circle size={20} />,
        // permissions: ["admin", "editor"],
        navLink: "",
      },
    ],
  },
  {
    id: "register",
    title: "Chọn mua dịch vụ",
    type: "collapse",
    icon: <Server size={20} />,
    badge: "warning",
    badgeText: "8",
    navLink: "/buy-select",
    children: [
      {
        id: "buycts",
        title: "Chứng thư số",
        type: "item",
        icon: <Circle size={12} />,
        // permissions: ["admin"],
        navLink: "/register-cts",
      },
      {
        id: "digibill",
        title: "Hóa đơn điện tử",
        type: "item",
        icon: <Circle size={20} />,
        // permissions: ["admin", "editor"],
        navLink: "",
      },
      {
        id: "digiinsurance",
        title: "BHXH điện tử",
        type: "item",
        icon: <Circle size={20} />,
        // permissions: ["admin", "editor"],
        navLink: "",
      },
      {
        id: "serviceaccountant",
        title: "Dịch vụ kế toán",
        type: "item",
        icon: <Circle size={20} />,
        // permissions: ["admin", "editor"],
        navLink: "",
      },
      {
        id: "registersoft",
        title: "Phần mềm kế toán",
        type: "item",
        icon: <Circle size={20} />,
        // permissions: ["admin", "editor"],
        navLink: "",
      },
      {
        id: "registerservice",
        title: "Dịch vụ đăng ký kinh doanh",
        type: "item",
        icon: <Circle size={20} />,
        // permissions: ["admin", "editor"],
        navLink: "",
      },
      {
        id: "insuranceservice",
        title: "Dịch vụ bảo hiểm",
        type: "item",
        icon: <Circle size={20} />,
        // permissions: ["admin", "editor"],
        navLink: "",
      },
      {
        id: "digicustom",
        title: "Hải quan điện tử",
        type: "item",
        icon: <Circle size={20} />,
        // permissions: ["admin", "editor"],
        navLink: "",
      },
    ],
  },
  {
    id: "ecommerce",
    title: "Giỏ hàng",
    type: "item",
    icon: <ShoppingCart size={20} />,
    navLink: "/ecommerce-cart",
  },
  {
    id: "supportinfo",
    title: "Hỗ trợ",
    type: "collapse",
    icon: <Info size={20} />,
    navLink: "/info",
    children: [
      {
        id: "normal-question",
        title: "Câu hỏi thường gặp",
        type: "item",
        icon: <Circle size={20} />,
        // permissions: ["admin", "editor"],
        navLink: "/question",
      },
      {
        id: "doc-manual",
        title: "Tài liệu hướng dẫn",
        type: "item",
        icon: <Circle size={20} />,
        // permissions: ["admin", "editor"],
        navLink: "/question-doc",
      },
      {
        id: "video-manual",
        title: "Video hướng dẫn",
        type: "item",
        icon: <Circle size={20} />,
        // permissions: ["admin", "editor"],
        navLink: "/question-video",
      },
    ],
  },
  {
    id: "supportRequire",
    title: "Yêu cầu hỗ trợ",
    type: "collapse",
    icon: <HelpCircle size={20} />,
    navLink: "/support",
    children: [
      {
        id: "supportcreate",
        title: "Tạo yêu cầu hỗ trợ",
        type: "item",
        icon: <Circle size={20} />,
        // permissions: ["admin", "editor"],
        navLink: "/support-create",
      },
      {
        id: "supportdetail",
        title: "Chi tiết yêu cầu hỗ trợ",
        type: "item",
        icon: <Circle size={20} />,
        // permissions: ["admin", "editor"],
        navLink: "/email/inbox",
      },
    ],
  },
  {
    id: "fourthPage",
    title: "Điểm thưởng",
    type: "item",
    icon: <Star size={20} />,
    navLink: "/error",
  },
  {
    id: "historyTrans",
    title: "Lịch sử giao dịch",
    type: "item",
    icon: <Clock size={20} />,
    navLink: "/error",
  },
  {
    id: "earnMoney",
    title: "Kiếm tiền cùng NewCA",
    type: "item",
    icon: <DollarSign size={20} />,
    navLink: "/affiliate",
  },
  {
    id: "utility",
    title: "Tiện ích",
    type: "item",
    icon: <Settings size={20} />,
    navLink: "/abc",
  },
];
