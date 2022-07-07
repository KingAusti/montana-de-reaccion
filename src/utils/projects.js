import background0 from '../assets/Pictures/PokeBuilder.png';
import background1 from '../assets/Pictures/weather-dashboard.png'
import background2 from '../assets/Pictures/rascal-erratic.png'

const projects = [
    {
        title: 'NFT Whale Watch',
        link: 'https://github.com/KingAusti/rascal-erratic',
        description: 'This is my 3rd and final project built for my UofO coding bootcamp. Heavily relying on the MERN stack, this is a SPA leveraging a publicly available NFT API.',
        alt: 'I perfect picture of the 3rd and final bootcamp project',
        src: background2,
        width: '48rem',
        height: '29rem',
        margin: '1rem'
        // bg: `url(${background0})`
    },
    {
        title: 'PokeBuilder',
        link: 'https://github.com/KingAusti/PokeBuilder',
        description: 'My first project! We build this using primarily front end API calls. PokeBuilder allows you to search for ANY Pokemon and see some of its most important stats.',
        alt: 'PokeBuilder v1',
        src: background0,
        width: '28rem',
        height: '34rem',
        margin: '1rem'
    },
    {
        title: 'Weather Dashboard!',
        link: 'https://github.com/KingAusti/Weathers-R-Us',
        description: 'This is one of my early builds, but I am particularly proud of it. It build using JavaScript and the OpenWeather API. Great experience and a ton of fun to figure out!',
        alt: 'background1',
        src: background1,
        width: '28rem',
        height: '19rem',
        margin: '1rem'
    }
]

export default projects;