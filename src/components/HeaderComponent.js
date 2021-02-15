import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { MDBAnimation } from "mdbreact";

class Header extends Component {

  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }


    render() {
        return(
            <React.Fragment>
                <Jumbotron fluid className="m-0 p-2">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-sm-6">
                                <img className="img-fluid" src="/assets/images/OlympiaTopTen.png" alt="Olympia Logo"></img>
                            </div>
                            <div className="col-sm-6">
                                <MDBAnimation reveal type="fadeInRight">
                                    <h5 className="d-sm-block">Explore the top highlights of Olympia, WA!</h5>
                                </MDBAnimation>
                            </div>                
                        </div>
                    </div>
                </Jumbotron>
                
                <Navbar dark sticky="top" color="primary" expand="md" className="navbar-default">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/"><img className="img-fluid" src="/assets/images/OlympiaTenOval.png" alt="Olympia Logo" /></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                                <Nav navbar className="ml-auto navbar-nav">
                                    <NavItem>
                                        <NavLink className="nav-link" to="/home">HOME</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/attractions">ATTRACTIONS</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/restaurants">RESTAURANTS</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/events">EVENTS</NavLink>
                                    </NavItem>
                                </Nav>
                        </Collapse>

                    </div>
                </Navbar>
            </React.Fragment>
        );
        
    }
}

export default Header;