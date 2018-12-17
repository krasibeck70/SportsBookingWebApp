import React, { Component } from 'react';
import '../assets/css/custom.css';
import '../assets/css/cardsComplex.css';
import SportsComplex from './../files/sports_complex.json';
import CardsComplex from './CardsComplex';


class Navbar extends Component {
    constructor(){
        super();
        this.state = {
            sportsComplex: SportsComplex["sports_Complex"],
        }
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