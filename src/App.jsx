import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import CustomNavBar from './components/CustomNavBar';
import Cover from './components/Cover';
import Projects from './components/Projects';
import Awards from './components/Awards';
import Experiences from './components/Experiences';
import Extracurricular from './components/ExtraCurricular';
import Volunteers from './components/Volunteers';
import Aboutme from './components/AboutMe';
import Footer from './components/Footer';

const ContentItems = require('./components/Contents.json');
const { 
    welcomeItems,
    projectItems,
    navBarItems,
    socialItems,
    awardItems,
    experienceItems,
    extracurricularItems,
    volunteerItem,
    aboutMeItems,
    footerText } = ContentItems;

class App extends Component {
  render() {

    return (
      <div className="App">
        <CustomNavBar Items={navBarItems} socialItems={socialItems} />
        <Cover />

        <Projects welcome={welcomeItems} Items={projectItems} />

        <Awards Items={awardItems} />
        <Experiences Items={experienceItems} />
        <Extracurricular Items={extracurricularItems} />
        <Volunteers Items={volunteerItem} />
        <Aboutme Items={aboutMeItems} />

        <Footer footerText={footerText} socialItems={socialItems} />
      </div>
    );
  }
}

export default App;
