import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import CartPage from "./pages/Cart/CartPage";
import DetailsPage from "./pages/Details/DetailsPage";
import ListByBrand from "./pages/Details/ListByBrand";
import ListByCategory from "./pages/Details/ListByCategory";
import SearchByKeyword from "./pages/Details/SearchByKeyword";
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
          <Route path="/login" element={<LoginPage />} />
          <Route path="/verify/:email" element={<LoginVerifyPage />} />
          <Route path="/product-details/:id" element={<DetailsPage />} />
          <Route path="/wish" element={<WishPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product-by-brand/:brand" element={<ListByBrand />} />
          <Route path="/product-by-category/:category" element={<ListByCategory />} />
          <Route path="/search-by-keyword/:keyword" element={<SearchByKeyword />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
