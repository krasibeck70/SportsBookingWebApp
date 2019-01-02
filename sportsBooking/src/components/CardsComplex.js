import React, { Component } from 'react';

class CardsComplex extends Component {
    constructor(props) {
        super();
    }
    onUpdate(e) {
        console.log(e.target.value);
    }
    render() {
        const divStyle = {
            backgroundImage: 'url(' + this.props.image + ')',
        };
        console.log(this.props.name, this.props.price, this.props.image);
        let idOfModal = '#' + 'Modal' + this.props.name;
        return (

            <div className="jumbotron general"  data-toggle="modal" data-target={idOfModal} style={divStyle}>

                <div id={this.props.name} className='jumbotron secondary'>
                    <h1>{this.props.name}</h1>
                    
                </div>
                <div className='row'>
                    <div className='col-lg-2'>
                        <span className='btn btn-warning spanPrice'><h4 className='price'>{this.props.price} BGN</h4></span>
                    </div>
                    <div className='col-lg-2 offset-lg-5'>
                        <span className='btn btn-warning spanHour'><h4 className='hour'>18:00h</h4></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardsComplex;