import React, { Component } from 'react';

class MoMoney extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            amount: 0
         }
    }

    handleChange = (e) => {
        this.setState({ 
            [e.target.name]:  e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleSubmit(this.state.amount)
    } 


    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleSubmit} >
                    <input name="amount" type="number" value={this.state.amount} onChange={this.handleChange}/>
                    <input type="submit" value="Add Money"/> 
                </form>
            </div>
         );
    }
}
 
export default MoMoney;