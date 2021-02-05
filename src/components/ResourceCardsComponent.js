import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

class ResourceCards extends Component {

  render() {
/*    const cascade = this.props.resources.map(resource => {
      return (
        <div key={resource.id}>
          <MDBCol>
            <MDBCard style={{ width: "16rem" }}>
              <MDBCardImage className="img-fluid" src={resource.image} waves />
              <MDBCardBody>
                <MDBCardTitle>{resource.name}</MDBCardTitle>
                <MDBCardText>
                  {resource.description}
                </MDBCardText>
                <MDBBtn href={resource.url}>Click</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </div>
      ); */
      const cascade = this.props.resources.map(resource => {
        return (
          <img
            key={resource.id}            
            className="row__poster"
            src={resource.image}
            alt={resource.name}
          />
          );
        });


    return (
      <div className="container">
        <div className="row">
          <h3>More Resources</h3>
          <div className="row__posters">
            {cascade}
          </div>
        </div>
      </div>
    );
  }
}

export default ResourceCards;