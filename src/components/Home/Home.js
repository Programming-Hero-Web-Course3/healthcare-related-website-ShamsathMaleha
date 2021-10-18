import { Carousel } from 'bootstrap';
import React from 'react';
import Services from '../Services/Services';
import Banner from './Banner';
import Carousal from './Carousal/Carousal';
import Doctors from './Doctors/Doctors';
import Facilities from './Facilities/Facilities';
import './Home.css'

const Home = () => {
    return (
        <div>
            {/* <Banner>

            </Banner> */}
            <Carousal>
                
            </Carousal>
            <Facilities>
                
            </Facilities>
            <Services>
                
            </Services>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;