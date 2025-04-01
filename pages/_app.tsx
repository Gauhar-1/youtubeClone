import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";

export default function App({ Component, pageProps }: AppProps) {
  if (typeof window !== "undefined"){
      return (
        <RecoilRoot>
          <BrowserRouter>
          <Component {...pageProps} />
          </BrowserRouter>
        </RecoilRoot>
      );
    }
    else{
      return (
<RecoilRoot>
        <StrictMode>
          <Component {...pageProps} />
          </StrictMode>
        </RecoilRoot>
      );
    }
}
