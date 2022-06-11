import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css';
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Portfolio from './components/Porfolio/Portfolio'
import Resume from './components/Resume/Resume'


function App() {
  // const [pages] = useState([
  //   {
  //     title: 'About',      
  //   },
  //   {
  //     title: 'Contact',      
  //   },
  //   {
  //     title: 'Portfolio',      
  //   },
  //   {
  //     title: 'Resume'    
  //   }
  // ])

  // const [currentPage, setCurrentPage] = useState(
  //   pages[0]
  // )
  
  return (
    <div className="App">
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

      <Routes>
        <Route 
          path='/'
          element={<About />}
        />
        <Route 
          path='contact'
          element={<Contact />}
        />
        <Route 
          path='portfolio'
          element={<Portfolio />}
        />
        <Route 
          path='resume'
          element={<Resume />}
        />     
      </Routes> 

      
      {/* <Header>
        <Nav
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Header>
      <Body 
        currentPage={currentPage}
      />
      <Footer /> */}
    </div>
  );
}

export default App;
