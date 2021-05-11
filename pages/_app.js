import { library, config } from "@fortawesome/fontawesome-svg-core";
import {
  faBorderAll,
  faList,
  faSortNumericDown,
  faSortNumericUp,
} from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;
library.add(faBorderAll, faList, faSortNumericUp, faSortNumericDown);

import "@fortawesome/fontawesome-svg-core/styles.css";
import "styles/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "highlight.js/styles/vs2015.css";

const App = ({ Component, pageProps }) => <Component {...pageProps} />;

export default App;
