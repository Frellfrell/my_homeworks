import styles from './MainSection.module.css';
import SearchBlock from './SearchBlock/SearchBlock';
import TrustedCompanies from  './TrustedCompanies/TrustedCompanies';
import CategoryCardList from './CategoryCardList/CategoryCardList';
/*import VacancyCardList from './VacancyCardList/VacancyCardList'; */// пока добавим как заглушку

function MainSection() {
  return (
    <main className={styles.mainSection}>
      <SearchBlock />
      <TrustedCompanies />
      <CategoryCardList />
      {/* <VacancyCardList /> */}
    </main>
  );
}

export default MainSection;