import { Route, Routes } from "react-router-dom";

import { ROUTES } from "../../utils/routes";

import Home from "../Home/Home";
import Cart from "../Cart/Cart";
import Orders from "../Orders/Orders";


const AppRoutes = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path={ROUTES.CART} element={<Cart />} />
    <Route path={ROUTES.ORDERS} element={<Orders />} />
  </Routes>
);

export default AppRoutes;