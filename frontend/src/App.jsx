import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import CartPage from "./pages/Cart/CartPage";
import DetailsPage from "./pages/Details/DetailsPage";
import HomePage from "./pages/Home/HomePage";
import WishPage from "./pages/Wish/WishPage";
import LoginPage from "./pages/login/LoginPage";
import LoginVerifyPage from "./pages/login/LoginVerifyPage";

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product-details/:id" element={<DetailsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/verify/:email" element={<LoginVerifyPage />} />
          <Route path="/wish" element={<WishPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
