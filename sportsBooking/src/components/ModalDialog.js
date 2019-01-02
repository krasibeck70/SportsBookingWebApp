import React, { Component } from 'react';
import $ from 'jquery'

class ModalDialog extends Component {
    constructor(props) {
        super();
    }

    onClick(complex) {
        console.log(complex);
        let idOfModal = 'Modal' + complex
        console.log(idOfModal);
        document.getElementById(idOfModal).style.display = 'none';
        document.getElementById(idOfModal).classList.remove('in');
        document.body.classList.remove("modal-open");
    }
    render() {
        console.log("modal", this.props.name);
        let modalId = 'Modal' + this.props.name;
        let image = '/pictures/' + this.props.image;
        return (
            <div className="modal" id={modalId} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-lg-5">
                                    <div id="carousel-thumb" className="carousel slide carousel-fade carousel-thumbnails" data-ride="carousel">
                                        <div className="carousel-inner" role="listbox">
                                            <div className="carousel-item active">
                                                <img className="d-block w-100" src={image} alt="First slide" />
                                            </div>
                                            <div className="carousel-item">
                                                <img className="d-block w-100" src={image} alt="Second slide" />
                                            </div>
                                            <div className="carousel-item">
                                                <img className="d-block w-100" src={image} alt="Third slide" />
                                            </div>
                                        </div>
                                        <a className="carousel-control-prev" href="#carousel-thumb" role="button" data-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        <a className="carousel-control-next" href="#carousel-thumb" role="button" data-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Next</span>
                                        </a>

                                        <ol className="carousel-indicators">
                                            <li data-target="#carousel-thumb" data-slide-to="0" className="active"> <img className="d-block" src={image} className="img-fluid" /></li>
                                            <li data-target="#carousel-thumb" data-slide-to="1"><img className="d-block" src={image} className="img-fluid" /></li>
                                            <li data-target="#carousel-thumb" data-slide-to="2"><img className="d-block" src={image} className="img-fluid" /></li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <h2 className="h2-responsive product-name">
                                        <strong>{this.props.name}</strong>
                                    </h2>
                                    <h4 className="h4-responsive">
                                        <span className="green-text">
                                            <strong>{this.props.price} BGN</strong>
                                        </span>
                                        <span className="grey-text">
                                            <small>
                                                <s>{this.props.price + 30}BGN</s>
                                            </small>
                                        </span>
                                    </h4>
                                    
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-6"></div>
                                        </div>
                                        <div className="text-center">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => this.onClick(this.props.name)}>Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            // <div className="modal" id={modalId}>
            //     <div className="modal-dialog">
            //         <div className="modal-content">
            //             <div className="modal-header">
            //                 <h4 className="modal-title">Modal Heading</h4>
            //                 <button type="button" className="close" data-dismiss="modal">&times;</button>
            //             </div>
            //             <div className="modal-body">
            //                 {this.props.price}
            //             </div>
            //             <div className="modal-footer">
            //                 <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => this.onClick(this.props.name)}>Close</button>
            //             </div>
            //         </div>
            //     </div>
            // </div>
        );
    }
}

export default ModalDialog;


{/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
    Open modal
</button> */}


