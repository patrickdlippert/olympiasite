import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';



import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
         <Main />
      </div>
    );
  }
}

export default App;
