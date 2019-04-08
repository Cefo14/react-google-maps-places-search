import React, { Component } from 'react';
import GoogleMapsPlacesSearch from '../../components/GoogleMapsPlacesSearch'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GoogleMapsPlacesSearch
          apiKey="AIzaSyCeNgYFZW2xqKNF5xItgLZAH-2MfSXBGSM "
          displayMap
          geolocation
        />
      </div>
    );
  }
}

export default App;
