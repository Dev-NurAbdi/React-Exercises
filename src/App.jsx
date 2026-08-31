import React, { useState } from 'react';
import LanguageContext from '../React js Exercises/Exercise 15/LanguageContext';
import Greeting from '../React js Exercises/Exercise 15/Greeting';

function App() {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'es' : 'en'));
  };

  return (
    <LanguageContext.Provider value={language}>
      <button onClick={toggleLanguage}>
        Switch to {language === 'en' ? 'Spanish' : 'English'}
      </button>
      <Greeting />
    </LanguageContext.Provider>
  );
}

export default App;
