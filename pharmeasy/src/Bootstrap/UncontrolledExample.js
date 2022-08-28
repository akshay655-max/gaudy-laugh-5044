import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn01.pharmeasy.in/dam/banner/banner/cdc1238fe0e-WELCOME27.jpg"
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn01.pharmeasy.in/dam/banner/banner/7461a18ddf5-e869414dfc6-Diag_old_App.jpg"
          alt="Second slide"
          sizes='250px'
        />

      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn01.pharmeasy.in/dam/banner/banner/29cf7cbba10-Liveasydiabeticslippers_1_App.jpg"
          alt="Third slide"
          aria-setsize={4}
        />

      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;