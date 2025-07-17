import styles from "./SearchBlock.module.css";
import SearchBar from "./SearchBar";
import rectangleIcon from "../../../assets/rectangle_12.png";

function SearchBlock() {
  return (
    <section className={styles.searchBlock}>
      <div className={styles.content}>
        <h1 className={styles.title}>Один клик <br />и работа в кармане</h1>
        <SearchBar />
      </div>
      <img className={styles.bgImage} src={rectangleIcon} alt="Decoration" />
    </section>
  );
}

export default SearchBlock;
