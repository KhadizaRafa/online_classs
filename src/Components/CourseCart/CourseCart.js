import React from 'react';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import './CourseCart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const CourseCart = (props) => {
    const course = props.course;

    return (
    
             <Col md={3}>
              <Card className='course-list'>
                <Card.Img variant="top" src={course.img} />
                <Card.Body>
                    <Card.Title>{course.name}</Card.Title>
                     <Card.Text>
                            Price : ${course.price}
                    </Card.Text>
                    <Button variant="warning" onClick={()=>
                        props.handleEnrollCount(course)}><FontAwesomeIcon icon={faCartPlus} /> Enroll Now</Button>
                </Card.Body>
                </Card>
              </Col>

         
    );
};

export default CourseCart;