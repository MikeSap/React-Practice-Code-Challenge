import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import MoMoney from './components/MoMoney';

const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      currentSushi: [],
      eatenSushi: [],
      beltPost1: 0,
      beltPost2: 4,
      wallet: 100,
      broke: false    
    }
  }

  handleSubmit = (amount) => {
    
    this.setState({ 
      wallet:  this.state.wallet + parseInt(amount),
      broke: false
    });
  }
  
  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(sushis => this.setState({currentSushi: sushis}))
  }

  sushiClick = (sushi) => {
    if(this.state.wallet < sushi.price){
      alert("Broke")
      this.setState({ 
        broke: true }); 
    }else{
      this.setState({
        ...this.state,
        eatenSushi: [...this.state.eatenSushi, sushi],
        wallet: this.state.wallet - sushi.price
      })
    }   
  }

  render() {
    return (
      <div className="app">
        
        
        <SushiContainer currentSushi={this.state.currentSushi} eatenSushi={this.state.eatenSushi} sushiClick={this.sushiClick}/>
        {this.state.broke ? <MoMoney handleSubmit={this.handleSubmit}/> : null} 
        <Table eatenSushi={this.state.eatenSushi} wallet={this.state.wallet}/>
      </div>
    );
  }
}

export default App;