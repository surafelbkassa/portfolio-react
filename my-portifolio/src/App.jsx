import React from 'react';
import Header from './components/Header/Header.jsx';
import About from './components/About/About.jsx';
import Projects from './components/Projects/Projects.jsx';
import Contact from './components/Contact/Contact.jsx';
import Resume from './components/Resume/Resume.jsx';
import Blog from './components/Blogs/Blogs.jsx';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Contact />
      <Blog />
      <Resume />
    </div>
  );
}

export default App;
