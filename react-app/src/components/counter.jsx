import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState){
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);

    if(prevProps.counter.value !== this.props.counter.value){
      // ajax call and get new data from server
      console.log("ajax call and get new data from server");
    }
  }

  componentWillUnmount(){
    console.log("Counter - Unmount");
  }

  render() {
    console.log("Counter - rendered");

    return (
      <React.Fragment>
        <p>
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter)}
            className="btn btn-danger btn-sm m-2"
          >
            Delete
          </button>
        </p>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
