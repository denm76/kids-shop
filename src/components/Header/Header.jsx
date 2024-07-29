import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "../../assets/logo.svg";
import Cart from "../../assets/cart.svg";
import { ROUTES } from "../../utils/routes";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={Logo} alt="Синий куб"></img>
        </Link>
      </div>

      <div className={styles.navigation}>
        <NavLink className={styles.navigation__anchor} to={ROUTES.HOME}>
          Товары
        </NavLink>
        <NavLink className={styles.navigation__anchor} to={ROUTES.ORDERS}>
          Заказы
        </NavLink>
      </div>

      <Link className={styles.cart} to={ROUTES.CART}>
        <div className={styles.cart__container}>
          <img src={Cart} alt="Корзина" />
          <span>Корзина</span>
        </div>
      </Link>
    </div>
  );
};

export default Header;
