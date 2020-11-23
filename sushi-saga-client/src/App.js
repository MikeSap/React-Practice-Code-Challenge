import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      currentSushi: [],
      eatenSushi: [],
      wallet: 100    
    }
  }
  
  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(sushis => this.setState({currentSushi: sushis}))
  }

  sushiClick = (sushi) => {
    this.setState({
      ...this.state,
      eatenSushi: [...this.state.eatenSushi, sushi],
      wallet: this.state.wallet - sushi.price
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer currentSushi={this.state.currentSushi} eatenSushi={this.state.eatenSushi} sushiClick={this.sushiClick}/>
        <Table eatenSushi={this.state.eatenSushi} wallet={this.state.wallet}/>
      </div>
    );
  }
}

export default App;