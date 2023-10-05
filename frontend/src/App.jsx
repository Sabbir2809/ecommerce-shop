import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./pages/Common/Footer";
import Navbar from "./pages/Common/Navbar";
import HomePage from "./pages/Home/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
};

export default App;
