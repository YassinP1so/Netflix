import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Task.css'
import ReactStars from "react-rating-stars-component";



const Task = ({task}) => {
  return (
    <div className='content'>
    <div className='project-card' >
    <Card style={{ width: '18rem' }} className="card">
    <Card.Img variant="top" src={task.img} />
    <Card.Body>
    
      <Card.Title>
      {task.name}
      </Card.Title>
      <Card.Text>
        {task.description}
      </Card.Text>
      <ReactStars
      
    value={task.rate}
    
    size={24}
    edit={false}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
  />,
      
      <Button className='BTN' variant="primary" href={task.trailer} target='blank'>Trailer</Button>
    </Card.Body>
  </Card>
    </div>
    </div>
  );
}

export default Task;
