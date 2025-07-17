import Logo from "../UI/Logo";
import styles from "./Header.module.css";


function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerNav}>
        <Logo />
        <a href="#" className={styles.searchBtn}>Поиск работы</a>
        <a href="#" className={styles.searchBtn}>Поиск стартапов</a>
      </div>
      <div className={styles.headerBtn}>
        <a href="#">Регистрация</a>
        <button className={styles.loginBtn}>Вход</button>
      </div>
    </header>
  );
}

export default Header;