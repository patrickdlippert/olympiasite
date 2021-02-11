import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { MDBAnimation } from "mdbreact";
import CardCarousel from './CardCarouselComponent';



class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSweepstakes = this.handleSweepstakes.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSweepstakes(event) {
        alert(`First name: ${this.firstName.value} Last name: ${this.lastName.value} Email: ${this.email.value}`);
        this.toggleModal();
        event.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                <div id="home">
                    <div className="overlay">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 align-items-center">
                                    <MDBAnimation reveal type="tada">
                                        <img className="d-flex img-fluid" src="assets/images/topten.png" alt="Olympia Logo" />
                                    </MDBAnimation>
                                    <h1 className="text-center">The absolute best of Olympia!</h1>
                                </div>

                                <div className="col m-1 py-5">
                                    <Card style={{ backgroundColor: 'rgb(173,151,81)' }} className="text-center">
                                        <CardImg className="p-1" src={this.props.promotion.image} alt={this.props.promotion.name} />
                                        <CardBody>
                                            <CardTitle tag="h3">{this.props.promotion.name}</CardTitle>
                                            <CardText className="text-light">{this.props.promotion.description}</CardText>
                                            <Button color="primary" onClick={this.toggleModal}>Enter Sweepstakes</Button>

                                            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                                                <ModalHeader toggle={this.toggleModal}>Enter Sweepstakes</ModalHeader>
                                                <ModalBody>
                                                    {/* Uncontrolled Form within a Modal */}
                                                    <Form onSubmit={this.handleSweepstakes}>
                                                        <FormGroup className="text-left">
                                                            <Label htmlFor="yourFirstName">First Name</Label>
                                                            <Input type="text" name="firstName" id="yourFirstName" placeholder="First" innerRef={input => this.firstName = input} />
                                                        </FormGroup>
                                                        <FormGroup className="text-left">
                                                            <Label htmlFor="yourLastName">Last Name</Label>
                                                            <Input type="text" name="lastName" id="yourLastName" placeholder="Last" innerRef={input => this.lastName = input} />
                                                        </FormGroup>
                                                        <FormGroup className="text-left">
                                                            <Label htmlFor="yourEmail">Email</Label>
                                                            <Input type="email" name="email" id="yourEmail" placeholder="name@company.com" innerRef={input => this.email = input} />
                                                        </FormGroup>
                                                        <FormGroup className="text-left" check>
                                                            <Label check>
                                                                <Input type="checkbox" required />{' '}
                                                        Yes, I’m 21 years or older. I have read and agree to the Official Rules.
                                                    <       /Label>
                                                        </FormGroup>
                                                        <Button type="submit" value="submit" color="primary">Submit</Button>
                                                    </Form>
                                                </ModalBody>
                                            </Modal>
                                        </CardBody>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <CardCarousel resources={this.props.resources} />
            </React.Fragment>
        );
    }
}

export default Home;