import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import service from '../../data/service.json'
import abc from '../../data/image/services/cardiac.jpg'

const Details = () => {
  
    // const {img, name, description} = props
    const {sId} = useParams()
    const [details, setDetails] = useState([])
    console.log(sId)

    useEffect(()=>{
      setDetails(service[sId-1])
        // const url =`./service.json/${sId}`
        // fetch(url)
        // .then(res=>res.json())
        // .then(data=>console.log(data))
    },[sId])
    console.log(details)
    return (
        <div className="container">
            <Row>
             <Col >
      <Card className="service-col">
        <Card.Img variant="top" src={details.img} />
        <Card.Body>
          <Card.Title>{details.name}</Card.Title>
          <Card.Text>
         {details.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    </Row>
        </div>
    );
};

export default Details;
