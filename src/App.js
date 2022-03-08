import {Routes, Route} from 'react-router-dom';
import './styles/style.css';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';

const App = () => {
  return (
    <>
      <main>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Project/>}/>
        </Routes>
      </main>
    </>
  )
}

export default App
