'use client';

import React from "react";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomCarousel = () => (
    <Carousel style={{ width: '100%', maxWidth: '800px', margin: 'auto' }}>
        <Carousel.Item>
            <img className="d-block w-100" src="/cricket1.jpg" alt="cricket 1"/>
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100" src="/cricket2.jpg" alt="cricket 2"/>
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100" src="/cricket3.jpg" alt="cricket 3"/>
        </Carousel.Item>
    </Carousel>
);

export default CustomCarousel;