import React, { useEffect,useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { BsCodeSlash } from 'react-icons/bs';

const ProjectLarge = ({ id, img, title, description, link, site_link }) => {
  
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    
    <div className="card" data-aos="fade-left" key={id}>
      <div className="card-container">
        <div className="card-front">
          <img src={img} alt="my app" />
        </div>
        <div className="card-back">
          <div className="card-b-info">
            <h4>{title}</h4>
            <p className="myDesc" data-aos>
              {description}
            </p>
            <a href={link}>view code <BsCodeSlash/></a>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectSmall = ({ id, img, title, description, link, site_link }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <Card sx={{ maxWidth: 345 }} key={id}>
    <CardMedia
      component="img"
      alt={title}
      height="150"
      image={img}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" CardActions={link}>view code <BsCodeSlash/></Button>
      {/* <Button size="small">Learn More</Button> */}
    </CardActions>
  </Card>
  
)}

const CreateProject = (info) => {
  const { img, title, description, link, site_link } = info;
  const [width, setWidth] = useState(0)
  
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }
    
    window.addEventListener("resize", handleResize)
    
    handleResize()
  })
  if(width > 800){
    return (
      <ProjectLarge
        img={img}
        title={title}
        description={description}
        link={link}
        site_link={site_link}
      />
    );
  }else{
    return (
      <ProjectSmall
        img={img}
        title={title}
        description={description}
        link={link}
        site_link={site_link}
      />
    );
  }
  
};

export default CreateProject;
