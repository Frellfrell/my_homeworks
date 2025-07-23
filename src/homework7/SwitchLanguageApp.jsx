import React from "react";
import LanguageProvider from "./LanguageProvider";
import LanguageText from "./LanguageText";
import LanguageSwitcher from "./LanguageSwitcher";
import "./SwitchLanguage.css";

const SwitchLanguageApp = () => {
  return (
    <LanguageProvider>
     <div className="app-container">
        <h1>Switch Language</h1>
        <LanguageSwitcher />
        <LanguageText />
      </div>
    </LanguageProvider>
  );
};

export default SwitchLanguageApp;
