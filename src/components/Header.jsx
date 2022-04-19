import { Link } from "react-router-dom";
import '../styles/Home.css';

const Header = () => {
  return (
    <header>
        <nav className="navbar">
            <div className="navbar__logo">
                <Link to='/'>
                    <img className="logo-img" src="../assets/images/small-logo.png" alt="reihaneh naderi"/>
                </Link>
            </div>

            <ul className="navbar__lists">
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
