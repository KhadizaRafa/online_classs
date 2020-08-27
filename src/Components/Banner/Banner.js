import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './Banner.css'


const Banner = () => {
    const style = {height: "600px"};
    const imgStyle = {height: "fit-content"}
    return (
        <div>
            <Carousel style={style}>
             <Carousel.Item>
                <img style={imgStyle}
                className="d-block w-100 "
                src="https://miro.medium.com/max/1200/1*br7A1uKlYcYykRQsYylt3g.jpeg"
                alt="First slide"
                />
               
            </Carousel.Item>
            <Carousel.Item >
                <img style={imgStyle}
                className="d-block w-100"
                src="https://skymaxpk.com/wp-content/uploads/2019/07/web-designing-course-in-jalandhar-min.png"
                alt="Second slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img style={imgStyle}
                className="d-block w-100"
                src="https://exposureninja.com/wp-content/uploads/2019/06/best-free-online-digital-marketing-courses-1024x576.png"
                alt="Third slide"
                />

            </Carousel.Item>
            </Carousel>

            <Navbar className="navbar">
                {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
                <Nav className="mx-auto">
                <a className="link" href="#home">Home</a>
                <a className="link" href="#features">Features</a>
                <a className="link" href="#pricing">Pricing</a>
            </Nav>
              
            </Navbar>
        </div>
    );
};

export default Banner;