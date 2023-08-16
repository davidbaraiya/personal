import imdb from "../assets/images/portfolio/imdbClone.png";
import education from "../assets/images/portfolio/education.png";
import moviesSearch from "../assets/images/portfolio/movieSearch.png";
import dentist from "../assets/images/portfolio/dentist.png";
import cars from "../assets/images/portfolio/cars.png";
import barbecue from "../assets/images/portfolio/barbecue.png";
import bakery from "../assets/images/portfolio/bakery.png";
import userDetails from "../assets/images/portfolio/userDetails.png";
import hotel from "../assets/images/portfolio/hotel.png";
import eshop from "../assets/images/portfolio/Eshop.png";

const portfolioData = [
  {
    id: 1,
    category: "webDesign",
    link: "https://themes.workdo.io/html/barbecue/",
    image: barbecue,
    title: "barbecue grills ",
    description: "barbecue grills Website using html, css and jquery",
  },
  {
    id: 2,
    category: "webDesign",
    link: "https://themes.workdo.io/html/bakery/",
    image: bakery,
    title: "bakery website",
    description: "bakery multi web pages using html,css and javascript",
  },
  {
    id: 10,
    category: "reactApp",
    link: "https://eshop-beige.vercel.app/",
    image: eshop,
    title: "e commarce app",
    description:
      "eshop with login, singup with email, google and facebook with firebase. add to cart, checkout, filer product with price range, price, sort by name and rating ascending and Descending. add to wishist when user is login. using react 18, redux toolkit, firebase, APIs, BS5, MUI.",
  },
  {
    id: 3,
    category: "reactApp",
    link: "https://userdetailss.netlify.app/",
    image: userDetails,
    title: "user Details",
    description:
      "user details CURD opration with Redux Toolkit and localstorage",
  },

  {
    id: 4,
    category: "reactApp",
    link: "https://imdbsmall.netlify.app/",
    image: imdb,
    title: "IMDB Clone",
    description: "imdb clone using react and APIs",
  },
  {
    id: 5,
    category: "reactApp",
    link: "https://education-dk.netlify.app/",
    image: education,
    title: "Eucation Website",
    description: "simple education website using react js",
  },
  {
    id: 6,
    category: "webDesign",
    link: "https://themes.workdo.io/html/hotelsholiday/",
    image: hotel,
    title: "Hotel and Holiday",
    description: "hotel and holiday multi web pages using html,css and jquery",
  },
  {
    id: 7,
    category: "webDesign",
    link: "https://themes.workdo.io/html/dentist/",
    image: dentist,
    title: "dentist",
    description: "destist multi web pages using html,css and javascrip",
  },
  {
    id: 8,
    category: "webDesign",
    link: "https://themes.workdo.io/html/cars/",
    image: cars,
    title: "dentist",
    description: "destist multi web pages using html,css and javascript",
  },
  {
    id: 9,
    category: "reactApp",
    link: "https://movieshuub.netlify.app/",
    image: moviesSearch,
    title: "Movies search App",
    description: "movie search app using react and APIs",
  },
];

export default portfolioData;
