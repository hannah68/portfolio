import {Routes, Route} from 'react-router-dom';

import './styles/style.css';

import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';

const App = () => {
  return (
    <>
      <main>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Project/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </main>
    </>
  )
}

export default App
