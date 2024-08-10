import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value, // Correctly initialized
    tags: [],
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary"; // Changed count to value
    return classes;
  }

  formatCount() {
    const { value } = this.state; // Changed count to value
    return value === 0 ? "Zero" : value; // Changed count to value
  }
}

export default Counter;
