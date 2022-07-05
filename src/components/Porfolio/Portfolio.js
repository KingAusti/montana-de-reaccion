import './Portfolio.css';
import projects from '../../utils/projects';
import Card from 'react-bootstrap/Card';

function Portfolio() {

    return (
      <div className="Portfolio">
        
        {/* Running into issues with compiling the project links */}
        <h1>This is the Portfolio</h1>

            {/* <!--Most influential project in largest box element--> */}
            <Card className='bg-dark text-white'>         
                <Card.Img src='../../assets/Pictures/PokeBuilder.png' alt='My First Group Project'>
                  pokebuilder v2
                </Card.Img>
            </Card>
              {/* <!--Previous project stacked veritically under the most important project--> */}
            <Card className='bg-dark text-white'>
              <a href='https://kingausti.github.io/Weathers-R-Us/' id="weather-dashboard" className="weather-dashboard">weather-dashboard</a>
            </Card>
            {/* <!--second project in noticabley smaller box element--> */}
            <Card className='bg-dark text-white'>
              <div class = "lower-projects">
                <a href='https://kingausti.github.io/run-buddy/'  id="run-buddy" className="run-buddy">test</a>
                {/* <!--third project which is both the most difficult and the most ugly--> */}
                <a href='https://kingausti.github.io/robot-gladiators/' id="robot-gladiators" className="robot-gladiators">test</a>
              </div>
            </Card>

          {/* <div className='projects'>
            {
              projects.map((project, i) => (
                <a className="project" style={{backgroundColor: project.color}} href={project.link} key={`project${i}`}>{project.name}</a>
              ))
            }
          </div> */}
      </div>
    );
  }
  
  export default Portfolio;