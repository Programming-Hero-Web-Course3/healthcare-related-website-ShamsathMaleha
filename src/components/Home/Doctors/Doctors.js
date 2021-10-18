import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor'

import './Doctors.css'

const Doctors = () => {
    const [doctors, setDoctors] =useState([])
    useEffect(()=>{
        fetch('./doctor.json')
        .then(res=>res.json())
        .then(data=>setDoctors(data))
        
    },[])
  
    return (
        <div id="doctors" className="doctors-section pt-5 mt-5 ">
            <div className=" mb-5 ">
             
            <h1 >Our Consultants</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Voluptas est quam itaque, fuga rem eveniet fugit architecto illum aliquid perferendis ab suscipit minima labore eos culpa libero voluptatum? Ipsum, error.</p>
            </div>
         
            <Container>
           <Row xs={1} md={2} lg={3} className="g-5 justify-content-md-center">
            {
                    
                        
                  doctors.map(doctor => <Doctor 
                    key={doctor.id}
                    doctor={doctor}></Doctor>)      
                    
                    }
            </Row>
           </Container>
           </div>
           
       
    );
};


export default Doctors;