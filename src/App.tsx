import React from "react";
import { useTranslation } from "react-i18next";

import i18n from "./locales/i18n";
import "./App.scss";

import HomePage from "./pages/home";

const App: React.FC = () => {
  const { t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <HomePage />
    </>
  );
};

export default App;
