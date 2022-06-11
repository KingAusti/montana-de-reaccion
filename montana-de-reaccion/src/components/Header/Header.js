import './Header.css';

function Header(props) {
  return (
    <div className="Header">
        <header>
            <p>Hey Im Austin</p>
            {props.children}
        </header>      
    </div>
  );
}

export default Header;
