import React, { Component } from 'react';
import {Map, InfoWindow,Marker, GoogleApiWrapper,OverlayView} from 'google-maps-react';
import SportsComplex from './../files/sports_complex.json';
import IconMarker from '../components/IconMarker';
import $ from 'jquery'

export class MapContainer extends Component {
  constructor(){
    super();
    this.state = {
      sportsComplex: SportsComplex["sports_Complex"],
    }
  }
  onClick(complex){
     
    //let complexCliked = document.getElementById(complex.name);
    //console.log(complexCliked);
    //console.log(complexCliked.scrollWidth,complexCliked.scrollHeight);
    
    //complexCliked.scrollIntoView({behavior: "smooth",block:'start',inline:'start'})
    let idOfModal ='Modal' + complex.name;
    //console.log(idOfModal);
    document.getElementById(idOfModal).style.display = 'block';
    document.getElementById(idOfModal).classList.add('in');
    document.body.classList.add("modal-open");

  }
    render() {
      //console.log(JSON.stringify(SportsComplex));
      var sComplex = this.state.sportsComplex.map((value,index) => {
      //var onClick = this.state.onClick;
      
        return <Marker
        name={value.name}
        icon={{url:'http://www.cestovnyinformator.sk/public/pictures/markers/red.png'}}
        position={{lat: value.lat, lng: value.lng}} 
        onClick = {this.onClick} />
      })
      
      return (
        <Map google={this.props.google}
            style={{width: '100%', height: '100%', position: 'relative'}}
            className={'map'}
            zoom={13}
                initialCenter={{
                    lat: 42.69,
                    lng: 23.32
                }}>
                {sComplex}
        </Map>
       
      );
    }
  }
   
  export default GoogleApiWrapper({
    apiKey: ("AIzaSyBDHk0DA9mEU3LYHuP_H7WGwlFytPpHCNU")
  })(MapContainer)