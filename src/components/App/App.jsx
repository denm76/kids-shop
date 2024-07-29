import AppRoutes from "../Routes/Routes";
import Header from "../Header/Header";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../features/products/productsSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getProducts());
  }, [dispatch])

  return (
    <>
      <Header />
      <AppRoutes />
    </>
  );
};

export default App;
