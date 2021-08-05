// ** React Imports
import { Suspense, lazy } from "react";
import ReactDOM from "react-dom";

// ** Redux Imports
import { Provider } from "react-redux";
import { store } from "./redux/storeConfig/store";

// ** Toast & ThemeColors Context
import { ToastContainer } from "react-toastify";
import { ThemeContext } from "./utility/context/ThemeColors";

// ** Spinner (Splash Screen)
import ComponentSpinner from "./components/@vuexy/spinner/Loading-spinner";

// ** Ripple Button
import "./@core/components/ripple-button";

// ** PrismJS
import "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-jsx.min";

// ** React Perfect Scrollbar
import "react-perfect-scrollbar/dist/css/styles.css";

// ** React Toastify
import "@styles/react/libs/toastify/toastify.scss";

// ** Core styles
import "./@core/assets/fonts/feather/iconfont.css";
import "./@core/scss/core.scss";
import "./assets/scss/style.scss";
import { GoogleAuthProvider } from "./views/login/GoogleAuthen";
import "./@fake-db/index";

// ** Service Worker
import * as serviceWorker from "./serviceWorker";

// ** Lazy load app
const LazyApp = lazy(() => import("./App"));

ReactDOM.render(
  <Provider store={store}>
    <GoogleAuthProvider>
      <Suspense fallback={<ComponentSpinner />}>
        <ThemeContext>
          <LazyApp />
          <ToastContainer newestOnTop />
        </ThemeContext>
      </Suspense>
    </GoogleAuthProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
