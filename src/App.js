import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Porfolio/Portfolio';
import Resume from './components/Resume/Resume';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


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
      
      <Header />

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

      <Footer />

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
