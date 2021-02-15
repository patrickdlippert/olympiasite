import React from "react";
import Gallery from "react-photo-gallery";
import { MDBAnimation } from "mdbreact";



function HighlightInfo({highlight}) {
    if(highlight.photos) {
        return(
            <div className="container mt-5">
                <div className="row">
                <MDBAnimation reveal type="fadeInUp">
                    <div className="col">
                        <h2>{highlight.name}</h2>
                        <h5>{highlight.date}</h5>
                        <p>{highlight.description}</p>
                        <hr />
                    </div>
                    </MDBAnimation>
                </div>
                <div className="row row-content">     
                    <MDBAnimation reveal type="fadeIn">
                        <Gallery photos={highlight.photos} />
                    </MDBAnimation>
                </div>
            </div>
        );
    }
    return( <div /> );
}

export default HighlightInfo;