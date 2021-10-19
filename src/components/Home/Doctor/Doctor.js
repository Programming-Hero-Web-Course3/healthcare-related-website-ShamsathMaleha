import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Doctor.css'

const Doctor = (props) => {
    const {id,img,name,visit, speciality} = props.doctor
    const history = useHistory();

    const uri = `/appointment/${id}`;
    const handleAppointment =()=>{
        history.push(uri)
    }

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
        Visit fee: {visit}.BDT
          </Card.Text>
          <button onClick={handleAppointment} type="button" className="btn btn-success" >Appointment</button>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default Doctor;