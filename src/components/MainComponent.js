import React, { Component } from 'react';
import Guide from './GuideComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import HighlightInfo from './HighlightInfoComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ATTRACTIONS } from '../shared/attractions';
import { RESTAURANTS } from '../shared/restaurants';
import { EVENTS } from '../shared/events';
import { RESOURCES } from '../shared/resources';
import { SPONSORS } from '../shared/sponsors';
import { PROMOTIONS } from '../shared/promotions';
import ScrollToTop from './ScrollToTop';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attractions: ATTRACTIONS,
      restaurants: RESTAURANTS,
      resources: RESOURCES,
      sponsors: SPONSORS,
      promotions: PROMOTIONS,
      events: EVENTS
    };
  }

  render() {

    const HomePage = () => {
      return (
        <Home 
          promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
          resources={this.state.resources}
        />
      );
    }

    const AttractionWithId = ({ match }) => {
      return (
        <HighlightInfo highlight={this.state.attractions.filter(attraction => attraction.id === +match.params.attractionId)[0]} />
      );
    };

    const RestaurantWithId = ({ match }) => {
      return (
        <HighlightInfo highlight={this.state.restaurants.filter(restaurant => restaurant.id === +match.params.restaurantId)[0]} />
      );
    };
    
    const EventWithId = ({ match }) => {
      return (
        <HighlightInfo highlight={this.state.events.filter(event => event.id === +match.params.eventId)[0]} />
      );
    };

    return (
      <div>
        <Header />
        <ScrollToTop />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/attractions' render={() => <Guide category={"attractions"} highlights={this.state.attractions} resources={this.state.sponsors} />} />
          <Route path='/attractions/:attractionId' component={AttractionWithId} />
          <Route exact path='/restaurants' render={() => <Guide category={"restaurants"} highlights={this.state.restaurants} resources={this.state.sponsors} />} />
          <Route path='/restaurants/:restaurantId' component={RestaurantWithId} />
          <Route exact path='/events' render={() => <Guide category={"events"} highlights={this.state.events} resources={this.state.sponsors} />} />
          <Route path='/events/:eventId' component={EventWithId} />
          <Redirect to='/' /> 
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;