import './App.css';
// import {Helmet} from "react-helmet";
import Header from './conponents/Header';
import Home from './conponents/Home';
import Profile from './conponents/Profile';
import About from './conponents/About';
import Skill from './conponents/Skill';
import Contact  from './conponents/Contact';
import Footer  from './conponents/Footer';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';


function App() {
  return (
    <Router>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
        crossorigin="anonymous"/>
      </head>
      
      <body className='body'>
        <div className='App container'>
          <Header />

          <Routes>
            <Route path="/" element = {<Home />} />
            <Route path="/profile" element = {<Profile />} />
            <Route path="/about" element = {<About />} />
            <Route path="/skill" element = {<Skill /> } />
            <Route path="/contact" element = {<Contact />} />
          </Routes>

          <Footer />
        </div>
      </body>
    </Router>
  );
}

export default App;
