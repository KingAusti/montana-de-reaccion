import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Porfolio/Portfolio';
import Resume from './components/Resume/Resume';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Stack from 'react-bootstrap/Stack';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser, } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";



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
      <main>
      <Stack direction='horizontal' gap={100}> 
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
        </Stack>
      </main>

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
