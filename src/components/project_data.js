import proja from "../components/images/proj-1.PNG";
import projb from "./images/proj-2.PNG";
import projc from "./images/proj-3.PNG";
import projd from "./images/proj-4.PNG";
import proje from "./images/proj7.PNG";
import projf from "./images/proj-6.PNG";

const my_projects = [
  {
    id: 0,
    img: proja,
    title: "My blogging app",
    description:
      "This is a python/django django bloging application. Allows features like editing, deleting and adding a new blog.",
    link: "https://github.com/JackieNomsa/my-django-blog",
  },
  {
    id: 1,
    img: projb,
    title: "J n J's travel & tours",
    description:
      "This is a python/flask web app of a travel and tour company with data from a MySQL database",
    link: "https://github.com/JackieNomsa/travel",
  },
  {
    id: 2,
    img: projc,
    title: "Movie web scrapper",
    description:
      "This is a python and BeautifulSoup4 web scrapper, searches data from the IMdb website, and renders it.",
    link: "https://github.com/JackieNomsa/python-web-scrapper",
  },
  {
    id: 3,
    img: projd,
    title: "Flask Portfolio",
    description: "This is a python/flask, html and css portfolio website",
    link: "https://github.com/JackieNomsa/jnd-portfolio",
  },
  {
    id: 4,
    img: proje,
    title: "To-do app",
    description:
      "React to-do list. You can add new to-does, delete and mark completed todos",
    link: "https://github.com/JackieNomsa/react-todo-app",
    site_link: "https://jackienomsa.github.io/react-todo-app/",
  },
  {
    id: 5,
    img: projf,
    title: "Expense Tracker",
    description:
      "This is a Django/Python app that  lets you know if you have reached your budget for the month or how much you have left.",
    link: "https://github.com/JackieNomsa/my_dj_exp_tracker.git",
  },
];
export default my_projects;
