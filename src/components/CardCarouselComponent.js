import React from 'react';

import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// This component returns a group of 5 star icons given a rating value from 1-5
// If a fraction is provided, it's rounded to the nearest 0.5 so that a half star
// is displayed.

function ConstructCard({resource}) {
    if( {resource} ) {
        return(
            <Card className="p-1">
                <a target="_blank:" href={resource.url}>
                <CardImg src={resource.image} alt={resource.name} title={resource.description}/>
                <CardImgOverlay>
                    <CardTitle>{resource.name}</CardTitle>
                </CardImgOverlay>
                </a>
            </Card>
        );
    }
    return ( <span /> );
}


function RenderCards({resources}) {
    const cardslide = resources.map(resource => {
        return (
            <div key={resource.id} className="col m-1">
                <ConstructCard resource={resource} />
            </div>
        );
    });
    const settings = {
        autoplay: true,
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    
      };
      return (
        <div className="m-3">
          <Slider {...settings}>
              {cardslide}
          </Slider>
        </div>
      );
}


 

function CardCarousel(props) {
    if(props.resources) {
        
        return(
            <div className="container-fluid">
                <div className="row row-content text-center pt-2 pb-5">
                    <div className="col">
                        <RenderCards resources={props.resources} />
                    </div>
                </div>
            </div>
        );
    }

    return( <span> This is failing </span>) ;
}

export default CardCarousel;



