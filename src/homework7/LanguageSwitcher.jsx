import { useContext } from 'react';

import LanguageContext from './LanguageContext';
import "./SwitchLanguage.css";

const LanguageSwitcher = () => {
  const { switchLanguage } = useContext(LanguageContext);

  return (
    <button className="switch-button" onClick={switchLanguage}>
      Switch Language
    </button>
  );
};

export default LanguageSwitcher;
