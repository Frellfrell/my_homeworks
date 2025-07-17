import CategoryCard from './CategoryCard';

import Finance from '../../../assets/finance.png';
import Transport from '../../../assets/transport.png';
import Design from '../../../assets/design.png';
import Restaurant from '../../../assets/restaurant.png';
import Medicine from '../../../assets/medicine.png';
import Multimedia from '../../../assets/multimedia.png';
import Support from '../../../assets/support.png';
import Management from '../../../assets/management.png';
import Sales from '../../../assets/sales.png';
import Arrow from '../../../assets/arrow.png';

import styles from './CategoryCardList.module.css';

function CategoryCardList() {
  const cards = [
    { imageSrc: Finance, text: 'Finance' },
    { imageSrc: Transport, text: 'Transport' },
    { imageSrc: Design, text: 'Design' },
    { imageSrc: Restaurant, text: 'Restaurant' },
    { imageSrc: Medicine, text: 'Medicine' },
    { imageSrc: Multimedia, text: 'Multimedia' },
    { imageSrc: Support, text: 'Support' },
    { imageSrc: Management, text: 'Management' },
    { imageSrc: Sales, text: 'Sales' },
    { imageSrc: Arrow, text: 'Show more', transparent: true }
  ];

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Работа <br />по категориям</h2>
      <div className={styles.grid}>
      {cards.map((card, index) => (
        <CategoryCard key={index} imageSrc={card.imageSrc} text={card.text} transparent={card.transparent} />
      ))}
    </div>
  </section>
  );
}

export default CategoryCardList;