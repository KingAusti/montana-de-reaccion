import './About.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Image from 'react-bootstrap/Image'

function About() {
    return (
      <div className="About">
        
        <div className="about-style">        
          <h2>About Me</h2>
        </div>
        <Image></Image>
        <p>
          Hi my name is Austin, 
          thanks for visiting 
          my portfolio! 
        </p>
        <p>
          With over 7 years in the field, 
          I am a seasoned IT professional 
          looking to change my career to 
          be a Software Developer.
        </p>        
        
      </div>
    );
  }
  
  export default About;