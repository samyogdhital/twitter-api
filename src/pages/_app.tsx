import React from "react";
import { type AppType } from "next/dist/shared/lib/utils";

import "../styles/globals.css";
import "../styles/min.css";
import { QueryClient, QueryClientProvider } from "react-query";

const MyApp: AppType = ({ Component, pageProps }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

export default MyApp;
