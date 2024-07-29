import { useState, useEffect } from "react";
import styles from "./Home.module.css";
import { useSelector } from "react-redux";
import Products from "../Products/Products";
import { useCallback } from "react";

const Home = () => {
  const [amount, setAmount] = useState(15);
  const { list } = useSelector(({ products }) => products);

  const scrollHandler = useCallback(
    (e) => {
      if (
        e.target.documentElement.scrollHeight -
          (e.target.documentElement.scrollTop + window.innerHeight) <
        100
      ) {
        setAmount(amount + 15);
      }
    },
    [amount]
  );

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, [scrollHandler]);

  return (
    <div className={styles.home}>
      <Products products={list} amount={amount} />
    </div>
  );
};

export default Home;
