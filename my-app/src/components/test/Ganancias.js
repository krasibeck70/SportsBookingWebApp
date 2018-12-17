import React, { Component } from 'react';
import { clearInterval } from 'timers';

class Ganancias extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: '',
            months: '',
            percent: '',
            result: 0
        }
        //this.handleChange = this.handleChange(this);
        
        this.clickButton = this.clickButton.bind(this);
    }
    clickButton() {
        this.calculate(this.state.amount,this.state.months,this.state.percent);
    }

    calculate(amount,months,percent) {
        let result = 0;
        let firstAmount = amount;
        let originalPercent = percent / 100;
        originalPercent = 1+originalPercent;
        for (let i = 0; i < months; i++) {
            firstAmount *= originalPercent
        }

        result = parseFloat(firstAmount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + ' BGN';
        this.setState({ result: result});
        // setInterval(() => {
        //     if (start >= firstAmount && timeout <= 0) {
        //         this.setState({ result: result});
        //         clearInterval();
        //     }
        //     else{
        //         if (start >= firstAmount) {
        //             this.setState({ result: result});
        //             clearInterval();
        //         }
        //         timeout -= 1;
        //         start += 1000;
        //         this.setState({ result: start});
        //     }
            
        // },1)
        
    }

    handleChangeAmount(event) {
        this.setState({ amount: event.target.value })
        this.calculate(event.target.value,this.state.months,this.state.percent);
        console.log(event.target.value)
    }

    handleChangeMonths(event) {
        this.setState({ months: event.target.value })
        this.calculate(this.state.amount,event.target.value,this.state.percent);
        console.log(event.target.value)
    }

    handleChangePercent(event) {
        this.setState({ percent: event.target.value })
        this.calculate(this.state.amount,this.state.months,event.target.value);
        console.log(event.target.value)
    }

    render() {
        return (
            <div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Amount</label>
                    <input onChange={event => this.handleChangeAmount(event)} type="numeric" className="form-control" placeholder="Amount" value={this.state.amount}></input>
                    <small id="emailHelp" className="form-text text-muted">Insert the amount</small>
                </div>

                <div className="form-group">
                    <label for="exampleInputPassword1">Months</label>
                    <input onChange={event => this.handleChangeMonths(event)} type="text" className="form-control" placeholder="Months" value={this.state.months}></input>
                    <small id="emailHelp" className="form-text text-muted">Insert months</small>
                </div>

                <div className="form-group">
                    <label for="exampleInputPassword1">Percentage</label>
                    <input onChange={event => this.handleChangePercent(event)} type="text" className="form-control"  placeholder="Percent" value={this.state.percent}></input>
                    <small id="emailHelp" className="form-text text-muted">Percent per month</small>
                </div>
                <button onClick={this.clickButton} className='btn btn-success'>Calculate</button>
                <div>
                <br></br>
                </div>
                <div>
                    <span className='btn btn-primary'><h1>{this.state.result}</h1></span>
                </div>
            </div>
        )
    }
}
export default Ganancias;