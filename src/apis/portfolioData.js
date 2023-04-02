import imdb from "../assets/images/portfolio/imdbClone.png";
import education from "../assets/images/portfolio/education.png";
import moviesSearch from "../assets/images/portfolio/movieSearch.png";
import dentist from "../assets/images/portfolio/dentist.png";
import cars from "../assets/images/portfolio/cars.png";
import barbecue from "../assets/images/portfolio/barbecue.png";
import bakery from "../assets/images/portfolio/bakery.png";
import userDetails from "../assets/images/portfolio/userDetails.png";

const portfolioData = [
  {
    id: 1,
    category: "reactApp",
    link: "https://imdbsmall.netlify.app/",
    image: imdb,
    title: "IMDB Clone",
    description: "imdb clone using react and APIs",
  },
  {
    id: 2,
    category: "reactApp",
    link: "https://education-dk.netlify.app/",
    image: education,
    title: "Eucation Website",
    description: "simple education website using react js",
  },
  {
    id: 3,
    category: "reactApp",
    link: "https://movieshuub.netlify.app/",
    image: moviesSearch,
    title: "Movies search App",
    description: "movie search app using react and APIs",
  },
  {
    id: 4,
    category: "webDesign",
    link: "https://themes.workdo.io/html/barbecue/",
    image: barbecue,
    title: "barbecue grills ",
    description: "barbecue grills Website using html, css and jquery",
  },
  {
    id: 5,
    category: "webDesign",
    link: "https://themes.workdo.io/html/bakery/",
    image: bakery,
    title: "bakery website",
    description: "bakery multi web pages using html,css and javascript",
  },
  {
    id: 6,
    category: "webDesign",
    link: "https://themes.workdo.io/html/dentist/",
    image: dentist,
    title: "dentist",
    description: "destist multi web pages using html,css and javascrip",
  },
  {
    id: 7,
    category: "webDesign",
    link: "https://themes.workdo.io/html/cars/",
    image: cars,
    title: "dentist",
    description: "destist multi web pages using html,css and javascript",
  },
  {
    id: 8,
    category: "reactApp",
    link: "https://userdetailss.netlify.app/",
    image: userDetails,
    title: "user Details",
    description: "user details CURD opration with Redux Toolkit",
  },
];

export default portfolioData;
