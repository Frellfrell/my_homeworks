import styles from './HeroSection.module.css';

import appleIcon from '../../assets/apple.png';
import googleIcon from '../../assets/google.png';
import xIcon from '../../assets/x.png';
import logo from '../../assets/logo.png';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
          <div className={styles.header}>
    <img src={logo} alt="Spotify" className={styles.logo} />
  </div>
      <h1 className={styles.title}>LIFE IS WASTED ON THE LIVING</h1>
      <p className={styles.subtitle}>Sign in <br />with</p>
       <div className={styles.iconWrapper}>
        <div className={styles.icon}>
          <img src={appleIcon} alt="Apple" />
        </div>
        <div className={styles.icon}>
          <img src={googleIcon} alt="Google" />
        </div>
        <div className={styles.icon}>
          <img src={xIcon} alt="Cancel" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
