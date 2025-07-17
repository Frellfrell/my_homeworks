import styles from './CategoryCardList.module.css';

function CategoryCard({ imageSrc, text, transparent }) {
  return (
    <div className={`${styles.card} ${transparent ? styles.transparent : ''}`}>
      <img src={imageSrc} alt={text} className={styles.image} />
      <p className={styles.text}>{text}</p>
    </div>
  );
}

export default CategoryCard;