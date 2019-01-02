import React, { Component } from 'react';
import '../assets/css/custom.css';
import '../assets/css/cardsComplex.css';
import SportsComplex from './../files/sports_complex.json';
import CardsComplex from './CardsComplex';
import Scroll from '../../node_modules/react-scroll-to-component'
import Axios from 'axios';


class Navbar extends Component {
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
              
              this.setState({isLoading:false, sportsComplex:result.data.result})
              console.log(this.state.sportsComplex);
            })
    }
    
    render(){
        var single = this.state.sportsComplex.map((value,index) => {
            var name = value.name;
            //var img = "http://worldkings.org/Userfiles/Upload/images/Yale.jpg"
            var img = value.image;
            console.log(img);
            var price = value.price;
            return(
                <CardsComplex
                    name = {name}
                    image = {img}
                    price = {price}
                ></CardsComplex>
            );
        })
        return(
                <div id="navbar" className="col-lg-4">
                    {single}
                </div>
        );
    }
}

export default Navbar;