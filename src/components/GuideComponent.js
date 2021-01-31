import React, { Component } from 'react';

class Guide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedAttraction: null
        };
    }

    render() {
        const guide = this.props.attractions.map(attraction => {
            return (
                <div className="row row-content align-items-center">
                    <div className="col col-sm-8 order-sm-last">
                        <img src={attraction.image} alt={attraction.name} />
                    </div>
                        

                    <div class="col-sm-4 text-left">
                        <h2>{attraction.name}</h2>
                        <p>{attraction.description}</p>
                    </div>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {guide}
                </div>
            </div>
        );
    }
}

export default Guide;