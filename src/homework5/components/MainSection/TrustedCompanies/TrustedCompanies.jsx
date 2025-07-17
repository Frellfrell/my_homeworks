import styles from "./TrustedCompanies.module.css";
import disney from "../../../assets/disney.svg";
import facebook from "../../../assets/facebook.svg";
import microsoft from "../../../assets/micsoft.svg";
import sony from "../../../assets/sony.svg";
import cocaCola from "../../../assets/cocacola.svg";

function TrustedCompanies() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Помогаем найти работу</p>
      <div className={styles.logos}>
        <img src={disney} alt="Disney" />
        <img src={facebook} alt="Facebook" />
        <img src={microsoft} alt="Microsoft" />
        <img src={sony} alt="Sony" />
        <img src={cocaCola} alt="Coca-Cola" />
      </div>
    </div>
  );
}

export default TrustedCompanies;

