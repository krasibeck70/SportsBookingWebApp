import React, { Component } from 'react';

class ButtonMenu extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <button type="button" className="close" data-dismiss="modal" >×</button>
        );
    }
}
export default ButtonMenu;