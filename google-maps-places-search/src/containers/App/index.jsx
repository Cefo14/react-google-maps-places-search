import React, { Component } from 'react';
import GoogleMapsPlacesSearch from '../../components/GoogleMapsPlacesSearch';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GoogleMapsPlacesSearch
          apiKey="YOUR_API_KEY"
          displayMap
          geolocation
        />
      </div>
    );
  }
}

export default App;
