import React from 'react';

import Header  from './components/Header'
import HomeSection  from './sections/HomeSection'
import AboutSection  from './sections/AboutSection'
import SkillSection  from './sections/SkillSection'

import data from './Data.json';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <HomeSection/>
      <AboutSection />
      <SkillSection/>

    </div>
  );
}

export default App;
