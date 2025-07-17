import Button from '../../Button/Button';
import searchIcon from '../../../assets/search.png'; 
import locationIcon from '../../../assets/location.png';
import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div className={styles.searchBar}>
      
     

      <form className={styles.searchForm}>

        {/* Первая колонка */}
        <div className={styles.inputGroup}>
          <img src={searchIcon} alt="поиск" className={styles.icon} />
          <span className={styles.label}>Должность или компания</span>
        </div>

        {/* Разделительная линия */}
        <div className={styles.divider}></div>

        {/* Вторая колонка */}
        <div className={styles.inputGroup}>
          <img src={locationIcon} alt="локации" className={styles.icon} />
          <span className={styles.label}>Город, страна</span>
        </div>

        {/* Кнопка */}
        <Button text="Поиск" />
      </form>
    </div>
  );
}

export default SearchBar;