import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Header from './components/Header';
import AboutIconLink from './components/AboutIconLink';
// import Post from './components/Post';
// import Redirect from './components/Redirect';
import IndexPage from './pages/IndexPage';
import AboutPage from './pages/AboutPage';
// import Card from './components/shared/Card';

// import ImgBackground from './images/background/star-background.png';

function App() {
  return (
    <Router>
      <Header />
        <div className="container">
          <Routes>
            <Route exact path='/' element={<IndexPage />} />
            <Route path='/about' element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
    </Router>
  );
}

export default App;