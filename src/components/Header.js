import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/2.png'
import img2 from '../assets/3.avif'
import img3 from '../assets/4.jpg'


const Header = () => {
    const images = [
        { src: img1, alt: "First slide" },
        { src: img2, alt: "Second slide" },
        { src: img3, alt: "Third slide" },
      ];
  return (
    <>
    <marquee  direction="right" className="fs-3 fw-bold mt-3"><span style={{color:'tomato'} }>2024 - 2025 </span>Admission Open!! <i class="bi bi-award-fill" style={{color:'tomato'} }></i></marquee>
    <Navbar expand="lg" className='bg-transparent mt-3'  style={{boxShadow:'5px 10px 18px #888888'}}>
      <Container>
        <Navbar.Brand href="#home" className="fs-5 fw-bold" style={{color:"tomato"}}><i className="bi bi-stack" style={{color:"tomato"}} ></i> University</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fw-bold">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#home">Course</Nav.Link>
            <Nav.Link href="#link">Achievements</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container>
    <Carousel className="mt-5">
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100 img-fluid rounded"
            src={image.src}
            alt={image.alt}
            style={{ objectFit: 'cover', height: '25rem', maxWidth: '100%' }}
          />
          <Carousel.Caption>
            <h3 style={{ color: 'tomato' }} className="display-5 fw-bold">University</h3>
            <h4 className="fw-bold"style={{ color: 'tomato' }}> Your Future, Our Mission</h4>
          </Carousel.Caption>
        </Carousel.Item> 
      ))}
    </Carousel>
    </Container>

    </>
  )
}

export default Header