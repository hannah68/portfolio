import {Routes, Route} from 'react-router-dom';

import './styles/style.css';

import { PAGE_LINK } from './config/config';

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
          <Route path={PAGE_LINK.home} element={<Home/>}/>
          <Route path={PAGE_LINK.about} element={<About/>}/>
          <Route path={PAGE_LINK.projects} element={<Project/>}/>
          <Route path={PAGE_LINK.contact} element={<Contact/>}/>
        </Routes>
      </main>
    </>
  )
}

export default App
