import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';



import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarText } from 'reactstrap';
import { MDBAnimation } from "mdbreact";
import Guide from './GuideComponent';
import ResourceCards from './ResourceCardsComponent';
import { ATTRACTIONS } from '../shared/attractions';
import { RESOURCES } from '../shared/resources';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attractions: ATTRACTIONS,
      resources: RESOURCES,
      selectedAttraction: null
    };
  }



  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/"><img className="img-fluid" src="assets/images/OlympiaTopTen.png" alt=""></img></NavbarBrand>
            <MDBAnimation reveal type="fadeInRight">
            <NavbarText className="text-white"><h5>Explore the top ten attractions in Olympia, WA!</h5></NavbarText> </MDBAnimation>
          </div>
        </Navbar>
        <Guide attractions={this.state.attractions} />
        <ResourceCards resources={this.state.resources} />

      </div>
    );
  }
}

export default Main;
