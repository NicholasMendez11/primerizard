import "../styles/globals.css";
import { Layout } from "../components";
import { StateContext } from "../context/StateContext";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import LoadingPage from "../components/LoadingPage";

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp;
