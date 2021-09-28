import { lazy } from "react";
import { Redirect } from "react-router-dom";

// ** Document title
const TemplateTitle = "Newca user portal";

// ** Default Route
const DefaultRoute = "/home";

// ** Merge Routes
const Routes = [
  {
    path: "/home",
    component: lazy(() =>
      import("../../views/dashboard/analytics main/AnalyticsDashboard")
    ),
  },
  {
    path: "/buy-select",
    component: lazy(() => import("../../views/buy/select/index")),
  },
  {
    path: "/buy-cts",
    component: lazy(() => import("../../views/request/Register/index")),
  },
  {
    path: "/search",
    component: lazy(() => import("../../views/search/ServiceSearch/index")),
  },
  {
    path: "/manage-exandcts",
    component: lazy(() => import("../../views/management/cts/ExpandCTS")),
  },
  {
    path: "/manage-editcts",
    component: lazy(() => import("../../views/management/cts/EditCTS")),
  },
  {
    path: "/manage-restorects",
    component: lazy(() => import("../../views/management/cts/RestoreCTS")),
  },
  {
    path: "/manage-reclaimcts",
    component: lazy(() => import("../../views/management/cts/ReclaimCTS")),
  },
  {
    path: "/manage-stopcts",
    component: lazy(() => import("../../views/management/cts/StopCTS")),
  },
  {
    path: "/manage-general",
    component: lazy(() => import("../../views/management/general/index")),
  },
  {
    path: "/manage-cts",
    component: lazy(() => import("../../views/management/cts/index")),
  },
  {
    path: "/ecommerce-shop",
    component: lazy(() => import("../../views/ecommerce/shop/Shop")),
  },
  {
    path: "/ecommerce-cart",
    component: lazy(() => import("../../views/ecommerce/cart/Cart")),
  },
  {
    path: "/info",
    component: lazy(() =>
      import("../../views/helpdesk/knowledge-base/KnowledgeBase")
    ),
  },
  {
    path: "/question",
    component: lazy(() => import("../../views/helpdesk/faq/FAQ")),
  },
  {
    path: "/question-video",
    component: lazy(() => import("../../views/helpdesk/video/VideoManual")),
  },
  {
    path: "/question-doc",
    component: lazy(() => import("../../views/helpdesk/doc/DocManual")),
  },
  {
    path: "/support",
    component: lazy(() => import("../../views/support/index")),
  },
  {
    path: "/support-create",
    component: lazy(() => import("../../views/support/CreateSupport")),
  },
  {
    path: "/email",
    exact: true,
    component: () => <Redirect to="/email/inbox" />,
  },
  {
    path: "/email/:filter",
    exact: false,
    component: lazy(() => import("../../views/email/Email")),
  },
  {
    path: "/fourth-page",
    component: lazy(() => import("../../views/request/Register/index")),
  },
  {
    path: "/fifth-page",
    component: lazy(() => import("../../views/helpdesk")),
  },
  {
    path: "/account",
    component: lazy(() =>
      import("../../views/account-settings/AccountSettings")
    ),
  },
  {
    path: "/deposit",
    component: lazy(() => import("../../views/deposit/Deposit")),
  },
  {
    path: "/buy-select",
    component: lazy(() => import("../../views/buy/select/index")),
  },
  {
    path: "/login",
    component: lazy(() => import("../../views/login/Login")),
    layout: "BlankLayout",
    meta: {
      authRoute: true,
    },
  },
  {
    path: "/error",
    component: lazy(() => import("../../views/Error")),
    layout: "BlankLayout",
  },
];

export { DefaultRoute, TemplateTitle, Routes };
