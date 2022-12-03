import "../styles/globals.css";
import GlobalProvider from "../context/Provider";

import { wrapper } from "../redux/store";

const App = ({ Component, pageProps }) => {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  );
};
//export default App;
export default wrapper.withRedux(App);
