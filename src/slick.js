import React from "react";
import Slider from "react-slick";
import mom from './assets/mom-in-water.jpg';
import mae1 from './assets/mae-1.jpg';
import mae2 from './assets/mae-2.jpg';
import sunset from './assets/sunset.jpg';
import water from './assets/water.jpg';



export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>

            <div>

                <img src={mom} alt='woman-in-ocean'></img>

            </div>

            <div>

                <img src={mae1} alt='girl-playing-at-beach'></img>

            </div>

            <div>

                <img src={water} alt='water-and-sand'></img>

            </div>

            <div>

                <img src={sunset} alt='sunset-pver-dunes'></img>

            </div>

            <div>

                <img src={mae2} alt='smiling-girl-at-beach'></img>

            </div>

        </Slider>
    );
}


