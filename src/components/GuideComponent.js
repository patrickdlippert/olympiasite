import React from 'react';
import { Button } from 'reactstrap';
import { MDBAnimation } from "mdbreact";
import { Link } from 'react-router-dom';
import RatingStars from "./RatingStarsComponent";
import CardCarousel from './CardCarouselComponent';


function RenderGuideItem({category, highlight}) {

    // This function creates an image gallery link using react-router only if there's a photos oject 
    // within the provided highlight object
    const CreateImageLink = ({ category, highlight }) => {
        if(highlight.photos) {
            return (
                <Link to={`/${category}/${highlight.id}`}>
                    <Button color="primary" size="sm"><i className="fas fa-image"></i> more</Button>
                </Link>
            );
        }
        return <span />
    };

    // This function creates a link to the object's provided  (if it exists). A fontawesome icon
    // for external link is placed in front of the url.
    const CreateUrlLink = ({ highlight }) => {
        if(highlight.url) {
            return (
                <span>
                    <i className="fas fa-external-link-alt" /> <a target="_blank:" href={highlight.url}>{highlight.url}</a>
                </span>
            );
        }
        return <span />
    };

    // This function creates a link to the object's provided address (if it exists). A fontawesome 
    // arrow icon is placed in front of the url. The address is first encoded as a URI before being
    // appended to a Google Maps link.
    const CreateAddressLink = ({ highlight }) => {
        if(highlight.address) { 
            let link = `http://maps.google.com/maps?q=${encodeURIComponent(highlight.address)}`;
            return (
                <span>
                    <i className="fas fa-location-arrow" /> <a target='_blank:' href={link}>{highlight.address}</a>
                </span>
            );
        }
        return <span />
    };

    return (
        <React.Fragment>

           {/* Dynamically alternate images left and right by adding "order-md-last" to odd highlight
                IDs and also place a numbered purple triangle on the side of the image that is closest
                to the text */}

            <div className={`col col-md-7 col-xl-6 px-4 ${(highlight.id % 2) ? 'order-md-last' : ''}`} >
                <div className="image-container">
                    <img className="d-flex mr-3 img-fluid" src={highlight.image} alt={highlight.name} />
                    <div className={`${(highlight.id % 2) ? 'top-left-triangle' : 'top-right-triangle'}`}></div>
                    <div className={`${(highlight.id % 2) ? 'top-left-text' : 'top-right-text'}`}>
                        {/* Stacked fontawesome icon of a number ontop of a circle */}
                        <span className="fa-stack">
                            <span className="fa fa-circle-o fa-stack-2x"></span>
                            <strong className="fa-stack-1x">
                                {highlight.id+1}
                            </strong>
                        </span>
                    </div>
                    <CreateImageLink category={category} highlight={highlight} />
                </div>
            </div>

            {/* Create a simple text column using name, date (if one exists), rating, price, type, 
            description, address and URLfrom the highlight item. Also generate a gold star icon array
            for a visual represenation of the rating. The MDBAnimation component makes the text block
            "zoom in" to its location in the column. */}
            <div className="col-md-5 col-xl-6 text-left px-4">
                <MDBAnimation reveal type="zoomIn">
                    <h2>{highlight.name}</h2>
                    <h5>{highlight.date}</h5>
                    <p className="d-sm-block">Rating:&nbsp;<span className="text-danger">{highlight.rating}</span> &nbsp;<RatingStars rating = {highlight.rating}  />
                    &nbsp;&nbsp;&nbsp;{highlight.price} - {highlight.type}</p> 
                    <p>{highlight.description}</p>
                    <p>
                    <CreateAddressLink highlight={highlight} /><br/>
                    <CreateUrlLink highlight={highlight} /></p>
                </MDBAnimation>
            </div>
        </React.Fragment>
    );
}


function Guide(props) {

    const guide = props.highlights.map(highlight => {
        return (
            <div key={highlight.id} className="row row-content align-items-center">
                <RenderGuideItem category={props.category} highlight={highlight} />
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