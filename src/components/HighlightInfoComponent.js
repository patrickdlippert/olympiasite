import React from "react";
import Gallery from "react-photo-gallery";
import { MDBAnimation } from "mdbreact";



function HighlightInfo({highlight}) {
    if(highlight.photos) {
        return(
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <h2>{highlight.name}</h2>
                        <h5>{highlight.date}</h5>
                        <hr />
                    </div>
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