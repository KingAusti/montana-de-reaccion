import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="Header ">        
        <header>
        <Link to='/'> 
          About
        </Link>
        <Link to='/contact'> 
          Contact
        </Link>
        <Link to='/portfolio'> 
          Portfolio
        </Link>
        <Link to='/resume'> 
          Resume
        </Link>
      </header>   
    </div>
  );
}

export default Header;
