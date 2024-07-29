import { Link } from "react-router-dom";
import styles from "./Products.module.css";
import Card from "../Card/Card"

const Products = ({products = [], amount }) => {

  const list = products.filter((_, i) => i < amount);

  return (

    <div className={styles.products}>
      {
        list.map(({id, title, price, picture, rating}) => (
          <Link to={`/products/${id}`} key={id}>
              <Card 
                title={title}
                price={price}
                picture={picture}
                rating={rating}
              />
          </Link>
        ))}
    </div>
  )
}

export default Products;