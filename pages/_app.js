import ThemeProvider from "providers/ThemeProvider";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import {
  faBorderAll,
  faList,
  faSortNumericDown,
  faSortNumericUp,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;
library.add(
  faBorderAll,
  faList,
  faSortNumericUp,
  faSortNumericDown,
  faSun,
  faMoon
);

import "@fortawesome/fontawesome-svg-core/styles.css";
import "styles/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "highlight.js/styles/vs2015.css";
import "react-toggle/style.css";

const App = ({ Component, pageProps }) => (
  <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
