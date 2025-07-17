import styles from './CategoryCardList.module.css';

function CategoryCard({ imageSrc, text }) {
  return (
    <div className={styles.card}>
      <img src={imageSrc} alt={text} className={styles.image} />
      <p className={styles.text}>{text}</p>
    </div>
  );
}

export default CategoryCard;