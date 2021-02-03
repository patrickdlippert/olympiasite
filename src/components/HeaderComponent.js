import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarText } from 'reactstrap';
import { MDBAnimation } from "mdbreact";

class Header extends Component {
    render() {
        return(
            <Navbar dark sticky="top" color="primary">
            <div className="container">
              <NavbarBrand href="/"><img className="img-fluid" src="assets/images/OlympiaTopTen.png" alt=""></img></NavbarBrand>
              <MDBAnimation reveal type="fadeInRight">
              <NavbarText className="text-white"><h5>Explore the top ten attractions in Olympia, WA!</h5></NavbarText> </MDBAnimation>
            </div>
          </Navbar>

        );
        
    }
}

export default Header;