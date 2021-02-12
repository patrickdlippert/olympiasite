import React from 'react';
import { MDBAnimation } from "mdbreact";
import RatingStars from "./RatingStarsComponent";
import CardCarousel from './CardCarouselComponent';


function AlternateHeaders({attraction}) {
    if ((attraction.id % 2)) {
        return (            
            <div className="col col-md-7 col-xl-6 px-4 order-md-last">
                <div className="image-container">
                    <img className="d-flex mr-3 img-fluid"  src={attraction.image} alt={attraction.name} />
                    <div className="top-left-triangle"></div>
                    <div className="top-left-text">

                        <span className="fa-stack">
                            <span className="fa fa-circle-o fa-stack-2x"></span>
                            <strong className="fa-stack-1x">
                                {attraction.id+1}
                            </strong>
                        </span>
                        
                    </div>
                </div>
            </div>
        );
    }

    return (            
        <div className="col col-md-7 col-xl-6 px-4">
            <div className="image-container">
                <img className="d-flex mr-3 img-fluid" src={attraction.image} alt={attraction.name} />
                <div className="top-right-triangle"></div>
                    <div className="top-right-text">

                        <span className="fa-stack">
                            <span className="fa fa-circle-o fa-stack-2x"></span>
                            <strong className="fa-stack-1x">
                                {attraction.id+1}
                            </strong>
                        </span>
                        
                    </div>
                </div>
            </div>
    );
}

function RenderGuideItem({attraction}) {
    return (
        <React.Fragment>
            <AlternateHeaders attraction={attraction}/>

            <div className="col-md-5 col-xl-6 text-left px-4">
                <MDBAnimation reveal type="zoomIn">
                    <h2>{attraction.name}</h2>
                    <h5>{attraction.date}</h5>
                    <p className="d-sm-block">Rating:&nbsp;<span className="text-danger">{attraction.rating}</span> &nbsp;<RatingStars rating = {attraction.rating}  />
                    &nbsp;&nbsp;&nbsp;{attraction.price} - {attraction.type}</p>
                    <p>{attraction.description}</p>
                    <p>Address: {attraction.address}</p>
                </MDBAnimation>
            </div>
        </React.Fragment>
    );
}




function Guide(props) {

    const guide = props.attractions.map(attraction => {
        return (
            <div key={attraction.id} className="row row-content align-items-center">
                <RenderGuideItem attraction={attraction} />
            </div>
        );
    });

    return (
        <>
        <div className="container">
            <div className="row">
                {guide}
            </div>
        </div>
        <CardCarousel resources={props.resources} />
        </>
    );

}

export default Guide;