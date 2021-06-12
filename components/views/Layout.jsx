import Header from "./Header";
import Carousel from "./Carousal";
import Footer from "./Footer";
import Topbar from "./components/Topbar";
const Layout = () => {
  return (
    <>
      <Topbar />
      <Header style={{padding:"0px"}}/>

      <Carousel />
      <Footer />
    </>
  );
};

export default Layout;
