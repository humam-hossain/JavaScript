import React, { Component } from 'react';
import Counters from './components/counters';
import NavBar from './components/navbar';

class App extends Component {
    state = {
        counters: [
          { id: 0, value: 0 },
          { id: 1, value: 0 },
          { id: 2, value: 0 },
          { id: 3, value: 0 },
        ],
      };

      constructor() {
        super();
        console.log("App - constructor");
      }

      componentDidMount() {
        // ajax call from database server
        console.log("App - mounted");
      }
    
      handleReset = () => {
        const counters = this.state.counters.map(c => {
          c.value = 0;
          return c;
        });
    
        this.setState({ counters });
      };
    
      handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        counters[this.state.counters.indexOf(counter)] = {...counter};
        counters[this.state.counters.indexOf(counter)].value++;
        this.setState({ counters });
      };
    
      handleDecrement = (counter) => {
        const counters = [...this.state.counters];
        counters[this.state.counters.indexOf(counter)] = {...counter};
        counters[this.state.counters.indexOf(counter)].value--;
        this.setState({ counters });
      };
    
      handleDelete = (counter) => {
        const counters = this.state.counters.filter((c) => c.id !== counter.id);
        this.setState({ counters });
      };
    
    render() { 
        console.log("App - rendered");
        return (
            <React.Fragment>
                <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
                <main className='container'>
                    <Counters 
                        counters={this.state.counters}
                        onReset={this.handleReset} 
                        onIncrement={this.handleIncrement} 
                        onDecrement={this.handleDecrement}
                        onDelete={this.handleDelete}
                    />
                </main>
            </React.Fragment>
        );
    }
}
 
export default App;