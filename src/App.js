import React from 'react';
import Counter from './components/Counter'
import './App.css';

class App extends React.Component {
  state = {
    counters: [ 
      { id: 1, count: 0},
      { id: 2, count: 0},
      { id: 3, count: 0} 
    ]
  }

  handleIncreaseOne = counterId => {
    const counterToUpdate = this.state.counters.find(c => c.id === counterId)
    const idxToUpdate = this.state.counters.indexOf(counterToUpdate)
    const newCounters = [this.state.counters.slice(0, idxToUpdate), { ...counterToUpdate, count: ++counterToUpdate.count }, this.state.counters.slice(idxToUpdate + 1) ]
  }

  handleIncreaseAll = () => {
    const counters = this.state.counters.map(c => ++c)
    this.setState({counters})
  }

  handleDecreaseAll = () => {
    const counters = this.state.counters.map(c => --c)
    this.setState({counters})
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
            <button onClick={this.handleIncreaseAll}>+</button>
            <Counter count={this.state.counters[0]}/>
            <Counter count={this.state.counters[1]}/>
            <Counter count={this.state.counters[2]}/>
            <button onClick={this.handleDecreaseAll}>-</button>
        </header>
      </div>
    );
  }
}

export default App;
