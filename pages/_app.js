import "../styles/globals.css";
import GlobalProvider from "../context/Provider";
import { SessionProvider } from 'next-auth/react';
import { wrapper } from "../redux/store";
import { StateMachineProvider, createStore } from "little-state-machine";

const App = ({ Component, pageProps }) => {
  createStore({
    TowUser: {
      Name: "",
      Location: "",
      ContactPhone: "",
      CompanyAddress: "",
      Country: "",
      Region: "",
      CompanyType: "",
      Specilaization: "",
      RoleType: "",
      FullName: "",
      Address: "",
      Email: "",
      Phone: "",
      Website: "",
      PaymentMethod: "",
      Currency: "",
    },
  });

  return (
    <GlobalProvider>
      <StateMachineProvider>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
        </SessionProvider>
      </StateMachineProvider>
    </GlobalProvider>
  );
};
//export default App;
export default wrapper.withRedux(App);
