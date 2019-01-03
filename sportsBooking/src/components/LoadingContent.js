import React, { Component } from 'react';
import $ from 'jquery'
import '../assets/css/loadingCompoentn.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/js/custom.js';
class LoadingContent extends Component {

    render() {
        $('#principal').css('oppacity','0.2');
        return (
            <div className="loading">
                <img id="img1" className="d-none" src="/pictures/loadingIndicators/loadingIndicator1.png"></img>
                <img id="img2" className="d-none" src="/pictures/loadingIndicators/loadingIndicator2.png"></img>
                <img id="img3" className="d-none" src="/pictures/loadingIndicators/loadingIndicator3.png"></img>
                <img id="img4" className="active" src="/pictures/loadingIndicators/loadingIndicator4.png"></img>
            </div>
        );


    }



}
export default LoadingContent;