import { useContext } from 'react';
import LanguageContext from './LanguageContext';
import "./SwitchLanguage.css";

const LanguageText = () => {
  const { language } = useContext(LanguageContext);

  return (
    <p className="language-text">
      {language === "en"
        ? "English Language was chosen."
        : "Ukrainian Language was chosen."}
    </p>
  );
};

export default LanguageText;
