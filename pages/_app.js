import Sidebar from "@/components/Sidebar";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Sidebar>
      <Component {...pageProps} />
    </Sidebar>
  );
};
export default MyApp;
