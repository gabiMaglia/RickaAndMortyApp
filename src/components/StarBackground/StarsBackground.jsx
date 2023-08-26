
import styles from "./starsBackground.module.css";

const StarsBackground = () => {
  return (
    <div>
      
      <div className={styles.stars}></div>
      <div className={styles.twinkling}></div>
      <div className={styles.clouds}></div>
    </div>
  );
};

export default StarsBackground;
