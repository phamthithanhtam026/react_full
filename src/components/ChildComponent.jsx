// 2 component: Class Component, Functional Component

/*
Function Component:
import React from 'react'

const ChildComponent = () => {
  return (
    <div>
      <p>Hello ChildComponent with ReactJS</p>
    </div>
  )
}

export default ChildComponent
*/

// Class Component
import React from "react";
class ChildComponent extends React.Component {
  state = {
    name: "Eric",
    channel: "HoiDanIT",
    age: 20,
  };

  handleChangeName(event) {
    this.setState({
      name: event.target.value,
    });
  }
  render() {
    return (
      // JSX
      <div>
        <p>Hello ChildComponent with React</p>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(event) => this.handleChangeName(event)}
        />
        <p>
          I am {this.state.name} and age: {this.state.age}. My channel is
          {this.state.channel}
        </p>
      </div>
    );
  }
}

export default ChildComponent;
