import './Portfolio';

function Portfolio() {
    return (
      <div className="Portfolio">
        
        {/* Running into issues with compiling the project links */}
        <h1>This is the Portfolio</h1>

          {/* <!--Most influential project in largest box element--> */}
            <a href='https://pokebuilder-v2.herokuapp.com/' id="pokebuilder" className="pokebuilder">pokebuilder v2</a>
            {/* <!--Previous project stacked veritically under the most important project--> */}
            <a href='https://kingausti.github.io/Weathers-R-Us/' id="horiseon" className="weather-dashboard">weather-dashboard</a>
            {/* <!--second project in noticabley smaller box element--> */}
            <div class = "lower-projects">
            <a href='https://kingausti.github.io/run-buddy/'  id="run-buddy" className="run-buddy">test</a>
            {/* <!--third project which is both the most difficult and the most ugly--> */}
            <a href='https://kingausti.github.io/robot-gladiators/' id="robot-gladiators" className="robot-gladiators">test</a>
            </div>
      </div>
    );
  }
  
  export default Portfolio;