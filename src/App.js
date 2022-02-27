import {Routes, Route} from 'react-router-dom';
import './styles/style.css';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';

const App = () => {
  return (
    <>
      <main>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </main>
    </>
  )
}

export default App
