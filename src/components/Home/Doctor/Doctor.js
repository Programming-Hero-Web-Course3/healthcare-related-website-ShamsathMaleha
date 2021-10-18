import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Doctor.css'

const Doctor = (props) => {
    const {img,name,visit, speciality} = props.doctor
   
    return (
        <div className="doctor-card">
            <Col>
      <Card className="doctor-col">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title> <h1>{name}</h1> </Card.Title>
          <Card.Text>
        <h4> {speciality} </h4>
          </Card.Text>
          <Card.Text>
        Visit fee: {visit} .BDT
          </Card.Text>
          <button type="button" className="btn btn-success" >Appointment</button>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default Doctor;