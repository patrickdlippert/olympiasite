import React, { Component } from 'react';
import { MDBIcon } from "mdbreact";

// This component returns a group of 5 star icons given a rating value from 1-5
// If a fraction is provided, it's rounded to the nearest 0.5 so that a half star
// is displayed.

class RatingStars extends Component {

    renderStars(rating) {
        let content = [];
        let roundedRating = Math.round(rating*2)/2; //Round to nearest 0.5
        let remainder = roundedRating;
        for (let i=1; i <= 5; i++) {
            remainder -= 1;
            if (remainder === -0.5) {
                content.push(<MDBIcon key={i} icon="star-half" className="amber-text" />); 
            } 
            else if (i <= roundedRating) {
                content.push(<MDBIcon key={i} icon="star" className="amber-text" />);
            }
            else {
                content.push(<MDBIcon key={i} far icon="star" className="amber-text" />);
            }
            
        }
        return content;
    };


 

    render() {
        if(this.props.rating) {
            return(
                <span>
                    {this.renderStars(this.props.rating)}
                </span>
            );
        }
        else {
            return(
                <span></span>
            );
        }

    }
}
export default RatingStars;