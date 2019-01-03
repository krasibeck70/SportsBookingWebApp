import React, { Component } from 'react';
import '../node_modules/jquery/src/jquery'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Maps from './components/GoogleMaps';
import MapsMobile from './components/GoogleMapsMobile';
import Navbar from './components/Navbar';
import Modal from './components/ModalDialog';
import Axios from 'axios';
import LoadingComponent from './components/LoadingContent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sportsComplex: [],
      token: '',
      isLoading: true
    }
  }
  componentWillMount() {
    //console.log(this.state.token + "krasi");
    setTimeout(() => {
      const requestBody = {
        username: 'test123',
        password: '12345',
        deviceId: 'testid'
      }
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      Axios.post('https://sportbookingsofia.herokuapp.com/auth/login', requestBody, config)
        .then((res) => {
          const token = res.data.result.token
          //console.log(token);
          this.setState({token:token})
          //console.log(this.state.token);
          this.setState({isLoading:false})
  
        }).catch(console.error);
    },10)
  }

  render() {
    //console.log("render:: " + this.state.token);
    // var single = this.state.sportsComplex.map((value, index) => {
    //   var name = value.name;
    //   var img = value.image;
    //   //console.log(img);
    //   var price = value.price;
    //   return (
    //     <Modal
    //       name={name}
    //       price={price}
    //       image={img}
    //     ></Modal>
    //   );
    // })
    if (this.state.isLoading) {
      return(<LoadingComponent/>);
    }else{
      var style = {
        display: 'none'
      }
      return (
        <div className='container' style={style}>
          {/* {single} */}
          <div className="App row">
  
            <Navbar
              token = {this.state.token}
            />
  
            <div className="maps">
              <Maps
                token = {this.state.token}
              />
            </div>
            <div className='maps-mobile'>
              <MapsMobile></MapsMobile>
            </div>
  
          </div>
        </div>
      );
    }
  }
}

export default App;
