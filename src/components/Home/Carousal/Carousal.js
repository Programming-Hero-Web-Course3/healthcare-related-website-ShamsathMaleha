import React from 'react';
import { Carousel } from 'react-bootstrap';
import first from '../../../images/banner/banner-6.jpg'
import second from '../../../images/banner/banner-7.jpg'

const Carousal = () => {
    return (
        <div>
        <Carousel fade>
            <Carousel.Item>
                <img height="500px"
                    className="d-block w-100"
                    src={first}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    height="500px"
                    className="d-block w-100 "
                    src="https://www.kiwitech.com/assets/images/industry/healthcare/banner.jpg?fbclid=IwAR1OYUGOd0OV99I9XIKe7mCphxZxLWTKKsQDL_4jrCWuJx5W0z9Vtry_tRI"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    height="500px"
                    className="d-block w-100"
                    src={second}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
    );
};

export default Carousal;