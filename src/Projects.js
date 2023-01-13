import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Projects.css'

function Projects() {
  return (
    <>
    <a id="projects"/>
    <Carousel className="carousel-class" nextLabel="" prevLabel="" interval={3000}>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="http://celbits.org.in/assets/images/portfolio/conquest22.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>CONQUEST</h3>
          <p>India's Largest Student-run Startup Conclave</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="http://celbits.org.in/assets/images/portfolio/sis.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>SUMMER IN A STARTUP</h3>
          <p>Provides Summer Internships to BITSians</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://celbits.org.in/assets/images/portfolio/red.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>RURAL ENTREPRENEURSHIP DIVISION</h3>
          <p>
          Promotes Rural Entrepreneurship
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://celbits.org.in/assets/images/portfolio/Eweek.png"
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h3>E-WEEK</h3>
          <p>
          Promotes Entrepreneurial Spirit on Campus
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14044.531370870041!2d75.58587725!3d28.354833099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39131964f43e4575%3A0x1fbad30854cf884d!2sBirla%20Institute%20Of%20Technology%20And%20Science%E2%80%93Pilani%20(BITS%E2%80%93Pilani)!5e0!3m2!1sen!2sin!4v1668076571514!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='map'></iframe>
    </>
  );
}

export default Projects;