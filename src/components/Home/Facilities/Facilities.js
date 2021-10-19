import React from 'react';
import './Facilities.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket, faHeart, faUsers, faHandHoldingMedical } from '@fortawesome/free-solid-svg-icons'
import { Col, Container, Row } from 'react-bootstrap';

const hours = <FontAwesomeIcon icon={faRocket} />
const care = <FontAwesomeIcon icon={faHeart} />
const family = <FontAwesomeIcon icon={faUsers} />
const emergency = <FontAwesomeIcon icon={faHandHoldingMedical} />
const Facilities = () => {
    return (
        <div className="">
            
            <h1 className="top-facilities mt-5">Our Latest Facilities</h1>
            
            <Container>
           <Row xs={1} md={2} lg={3} className="g-5 justify-content-md-center">
            <Col>
            <div className="facilities-content mt-5" >

                <div>
                    <span className="icon">{hours}</span>
                    <h3>24/7</h3>
                    <p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.</p>
  
                </div>
                <div>
                <span className="icon">{care}</span>
                    <h3>Intensive Care</h3>
                    <p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.</p>
  
                </div>
                <div>
                <span className="icon">{family}</span>
                    <h3>Family Planning</h3>
                    <p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.</p>
  
                </div>
                <div>
                <span className="icon">{emergency}</span>
                    <h3>Emergency</h3>
                    <p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.</p>
  
                
                </div>
            </div>
            </Col>
            </Row>
            
            </Container>
        </div>

    );
};

export default Facilities;