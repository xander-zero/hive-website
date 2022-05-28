import "../styles/globals.css";

import AppContainer from "../core/layout/AppContainer";

function MyApp({ Component, pageProps }) {
  return <AppContainer Component={Component} pageProps={pageProps} />;
}

export default MyApp;
