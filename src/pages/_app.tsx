import React from "react";
import { type AppType } from "next/dist/shared/lib/utils";

import "../styles/globals.css";
import "../styles/min.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  React.useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return <Component {...pageProps} />;
};

export default MyApp;
