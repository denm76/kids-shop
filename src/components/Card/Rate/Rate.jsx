import styles from "./Rate.module.css";

const Rate = ({ rating }) => {
  return (
    <div className={styles.rating}>
      <div
        className={styles.rating__yellowstars}
        style={{ width: `${7.05 * rating}%` }}
      ></div>
      <div className={styles.rating__greystars}></div>
    </div>
  );
};

export default Rate;
