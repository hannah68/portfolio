import { Link } from "react-router-dom";
import {useState} from 'react'
import '../styles/Home.css';
import {GrMenu} from 'react-icons/gr';

const Header = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <header>
        <nav className="navbar">
            <div className="navbar__logo">
                <Link to='/'>
                    <img className="logo-img" src="../assets/images/small-logo.png" alt="reihaneh naderi"/>
                </Link>
            </div>
            <button className="hamburger" onClick={() => setIsNavExpanded(!isNavExpanded)}>
                <GrMenu className="menu"/>
            </button>

            <ul className={isNavExpanded ? 'navbar__lists expanded': 'navbar__lists'}>
                <li className="navbar__lists--item">
                    <Link to='/'>Home</Link>
                </li>
                <li className="navbar__lists--item">
                    <Link to='/about'>About me</Link>
                </li>
                <li className="navbar__lists--item">
                    <Link to='/projects'>Projects</Link>
                </li>
                <li className="navbar__lists--item">
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
};

export default Header;
