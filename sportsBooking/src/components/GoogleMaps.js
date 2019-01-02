import React, { Component } from 'react';
import {Map, InfoWindow,Marker, GoogleApiWrapper,OverlayView} from 'google-maps-react';
import SportsComplex from './../files/sports_complex.json';
import IconMarker from '../components/IconMarker';
import Axios from 'axios';

export class MapContainer extends Component {
  constructor(props){
    super();
    this.state = {
      sportsComplex: [],
      isLoading: true 
    }
  }
  componentWillMount(){
    var configTemp = {
        headers: {
          'Content-Type': 'application/json',
          'token': this.props.token
        }
      }
      Axios.post('https://sportbookingsofia.herokuapp.com/sportPlaces', "", configTemp)
        .then((result) => {
          console.log(result);
          this.setState({isLoading:false,sportsComplex:result.data.result})
          console.log(this.state.sportsComplex);
        })
}
  onClick(complex){
        
    let complexCliked = document.getElementById(complex.name);
    console.log(complexCliked);
    console.log(complexCliked.scrollWidth,complexCliked.scrollHeight);
    complexCliked.scrollIntoView({behavior: "smooth",block:'start',inline:'start'})
  }
    render() {
      //console.log(this.state.sportsComplex);
      var sComplex = this.state.sportsComplex.map((value,index) => {
      //var onClick = this.state.onClick;
        return <Marker
        name={value.name}
        icon={{url:'http://www.cestovnyinformator.sk/public/pictures/markers/red.png'}}
        position={{lat: value.latitude, lng: value.longitude}}
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