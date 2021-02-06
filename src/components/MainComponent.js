import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';



import React, { Component } from 'react';
import { MDBAnimation } from "mdbreact";
import Guide from './GuideComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent.js';
import ResourceCards from './ResourceCardsComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ATTRACTIONS } from '../shared/attractions';
import { RESTAURANTS } from '../shared/restaurants';
import { EVENTS } from '../shared/events';
import { RESOURCES } from '../shared/resources';
import { PROMOTIONS } from '../shared/promotions';
import ScrollToTop from './ScrollToTop';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attractions: ATTRACTIONS,
      restaurants: RESTAURANTS,
      resources: RESOURCES,
      promotions: PROMOTIONS,
      events: EVENTS
    };
  }



  render() {

    const HomePage = () => {
      return (
        <Home 
          promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
      />
      );
    }

    return (
      <div>
        <Header />
        <ScrollToTop />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path='/attractions' render={() => <Guide attractions={this.state.attractions} />} />
          <Route exact path='/restaurants' render={() => <Guide attractions={this.state.restaurants} />} />
          <Route exact path='/events' render={() => <Guide attractions={this.state.events} />} />
          <Redirect to='/home' /> 
        </Switch>
        <ResourceCards resources={this.state.resources} />
        <Footer />
      </div>
    );
  }
}

export default Main;
