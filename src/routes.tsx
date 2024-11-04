import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import HomePage from "./pages/home/HomePage";
import ProductPage from "./pages/product/ProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/product/:id", element: <ProductPage /> },
    ],
  },
]);

export default router;
