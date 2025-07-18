import styles from './Footer.module.css';

import Logo from "../UI/Logo";
import feFacebook from '../../assets/feFacebook.svg';
import Twitter from '../../assets/twitter.svg';
import Google from '../../assets/google.svg';
import Linkedin from '../../assets/linkedin.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <h2 className={styles.title}>Популярные города</h2>
        <div className={styles.cityList}>
          {['Осака', 'Коясан', 'Киото', 'Нагоя', 'Хиросима', 'Фукуока', 'Саппоро', 'Осака', 'Кобе', 'Сендай'].map((city, index) => (
            <span key={index} className={styles.city}>{city}</span>
          ))}
        </div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.bottomSection}>
        <Logo className={styles.logo} />
        <div className={styles.socials}>
          <img src={feFacebook} alt="Facebook" />
          <img src={Twitter} alt="Twitter" />
          <img src={Google} alt="Google" />
          <img src={Linkedin} alt="Linkedin1" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;