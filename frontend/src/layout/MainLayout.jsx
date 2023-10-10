import Footer from "../pages/Common/Footer";
import Navbar from "../pages/Common/Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
