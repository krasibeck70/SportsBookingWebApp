import React, { Component } from 'react';
import '../node_modules/jquery/src/jquery'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Maps from './components/GoogleMaps';
import MapsMobile from './components/GoogleMapsMobile';
import Navbar from './components/Navbar';
import Modal from './components/ModalDialog';
import SportsComplex from './files/sports_complex.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sportsComplex: SportsComplex["sports_Complex"],
    }
  }
  render() {
    var single = this.state.sportsComplex.map((value,index) => {
      var name = value.name;
      var img = value.image;
      //console.log(img);
      var price = value.price;
      return(
        <Modal 
        name={name}
        price={price}
        image={img}
        ></Modal>
      );
  })
    return (
      <div className='container'>
        {single}
        <div className="App row">

          <Navbar />

          <div className="maps">
            <Maps />
          </div>
          <div className='maps-mobile'>
          <MapsMobile></MapsMobile>
          </div>
            
        </div>
      </div>
    );
  }
}

export default App;
