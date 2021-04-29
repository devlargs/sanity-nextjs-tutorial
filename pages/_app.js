import { library, config } from "@fortawesome/fontawesome-svg-core";
import { faBorderAll, faList } from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;
library.add(faBorderAll, faList);

import "@fortawesome/fontawesome-svg-core/styles.css";
import "styles/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "highlight.js/styles/vs2015.css";

export default ({ Component, pageProps }) => <Component {...pageProps} />;
