import proja from "../components/images/proj-1.PNG";
import projc from "./images/proj-3.PNG";
import proje from "./images/table-tennis.PNG";
import projf from "./images/proj-6.PNG";

const my_projects = [
  {
    id: 0,
    img: proja,
    title: "My blogging app",
    description:
      "This is a python/django django bloging application. Allows features like editing, deleting and adding a new blog.",
    link: "https://github.com/JackieNomsa/my-django-blog",
    site_link: "https://jackienomsa.github.io/kasi-rooms/",
  },
  {
    id: 2,
    img: projc,
    title: "Movie web scrapper",
    description:
      "This is a python and BeautifulSoup4 web scrapper, searches data from the IMdb website, and renders it.",
    link: "https://github.com/JackieNomsa/python-web-scrapper.git",
    site_link: "https://jackienomsa.github.io/kasi-rooms/",
  },
  {
    id: 4,
    img: proje,
    title: "Table Tennis",
    description: "Python and pygame digital table tennis, for two players, can be played on one computer",
    link: "https://github.com/JackieNomsa/TableTennis",
    site_link: "https://jackienomsa.github.io/TableTennis/",
  },
  {
    id: 5,
    img: projf,
    title: "Expense Tracker",
    description:
      "This is a Django/Python app that  lets you know if you have reached your budget for the set amount",
    link: "https://github.com/JackieNomsa/my_dj_exp_tracker.git",
    site_link: "https://jackienomsa.github.io/kasi-rooms/",
  },
];
export default my_projects;
