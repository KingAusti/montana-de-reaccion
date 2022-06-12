import About from '../About/About'
import Contact from '../Contact/Contact'
import Portfolio from '../Porfolio/Portfolio'
import Resume from '../Resume/Resume'
import './Body.css';

function Body(props) {
  const { currentPage } = props
  const renderPage = () => {
    if(currentPage.title = 'About'){
      return <About />
    }
    else if(currentPage.title = 'Contact'){
      return <Contact />
    }
    else if(currentPage.title = 'Portfolio'){
      return <Portfolio />
    }
    else if(currentPage.title = 'Resume'){
      return <Resume />
    }
  }
  return (
    <div className="Body">
      <h1>{currentPage.title}</h1>
      <div>{renderPage()}</div>
    </div>
  );
}

export default Body;