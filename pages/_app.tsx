import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import configureStore from "../flux/redux/store";
import { Toaster } from "react-hot-toast";
import SimpleReactLightbox from "simple-react-lightbox";

const store = configureStore();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <SimpleReactLightbox>
        <Toaster />
        <Component {...pageProps} />
      </SimpleReactLightbox>
    </Provider>
  );
}

export default MyApp;
