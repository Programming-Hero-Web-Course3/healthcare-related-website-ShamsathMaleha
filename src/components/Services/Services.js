import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] =useState([])
    useEffect(()=>{
        fetch('./service.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
        
    },[])
  
    return (
        <div id="services" className="services-section pt-5 mt-5 ">
            <div className="text-white mb-5 ">
             
            <h1 >Our Offered Services</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Voluptas est quam itaque, fuga rem eveniet fugit architecto illum aliquid perferendis ab suscipit minima labore eos culpa libero voluptatum? Ipsum, error.</p>
            </div>
         
            <Container>
           <Row xs={1} md={2} lg={3} className="g-5 justify-content-md-center">
            {
                    
                        services.map(service=><Service 
                            key={service.id}
                            service={service} ></Service>)
                        
                    
                    }
            </Row>
           </Container>
           </div>
           
       
    );
};

export default Services;