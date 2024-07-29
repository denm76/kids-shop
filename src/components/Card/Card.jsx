import styles from "./Card.module.css";
import Rate from "./Rate/Rate";

const Card = ({ title, price, picture, rating }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__image}>
        <img className={styles.card__img} src={picture} alt="Kids shop" />
      </div>

      <div className={styles.card__description}>
        <div className={styles.card__title}>{title}</div>
        <Rate className={styles.card__rating} rating={rating} />
        <div className={styles.card__price}>{price}</div>
      </div>
    </div>
  );
};

export default Card;
