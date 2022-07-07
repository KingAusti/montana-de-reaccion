import './Portfolio.css';
import projects from '../../utils/projects';
import Card from 'react-bootstrap/Card';
import background0 from '../../assets/Pictures/PokeBuilder.png';
import background1 from '../../assets/Pictures/robot-gladiators.png'

function Portfolio() {

    const myStyle = {
      backgroundImage: `url(${background0})`
    }

    return (
      <div className="Portfolio">
        
        {/* Running into issues with compiling the project links */}
        <h1>My Portfolio</h1>



          <div className='projects'>
            {
              projects.map((project, i) => {
                let myStyle = {
                  width: project.width,
                  height: project.height,
                  margin: project.margin
                };
                return (                  
                <a href={project.link} target='_blank'>
                  <Card className='bg-dark text-white' style={myStyle}>         
                    <Card.Img src={project.src} alt={project.alt} />
                    <Card.Body>
                      <Card.Title>{project.title}</Card.Title>
                      <Card.Text>{project.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </a>
              )})
            }
          </div>
      </div>
    );
  }
  
  export default Portfolio;