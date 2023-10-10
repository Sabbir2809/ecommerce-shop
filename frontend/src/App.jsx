import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import DetailsPage from "./pages/Details/DetailsPage";
import HomePage from "./pages/Home/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product-details/:id" element={<DetailsPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
