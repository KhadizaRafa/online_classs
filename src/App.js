import React ,{ useState } from 'react';
import './App.css';
import course from './Data/course.js';
// or less ideally
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import CourseCart from './Components/CourseCart/CourseCart'
import Banner from './Components/Banner/Banner'
import UserCart from './Components/UserCart/UserCart'


function App() {
  const Courses = course;
  const [userCourseCount,setUserCouses] = useState([]);

  const handleEnrollCount = (userAddedCourse)=> {
      const newCourse = [...userCourseCount,userAddedCourse];
      setUserCouses(newCourse);
  }
  

  // const [price,setPrice] = useState(0);
  // const handlePrice = ()=>
  // {
  //   console.log('updated price')
  // }

  return (
    <div>
      <Banner></Banner>
      <div  className="course-container">
      <Container>
        <Row>
        {Courses.map(course => <CourseCart course={course} key={course.id} handleEnrollCount={handleEnrollCount}></CourseCart> )}   
        </Row>
      </Container> 

      <div>
          <UserCart userCourse={userCourseCount}></UserCart>
      </div>
      </div>
      
    </div>
    
       

  );
}

export default App;
