import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';



import React, { Component } from 'react';
import { MDBAnimation } from "mdbreact";
import Guide from './GuideComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
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
        <Header />
        <Guide attractions={this.state.attractions} />
        <ResourceCards resources={this.state.resources} />
        <Footer />
      </div>
    );
  }
}

export default Main;
