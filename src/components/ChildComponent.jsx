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
  render() {
    return (
      // JSX
      <div>
        <p>Hello ChildComponent with React</p>
        <p>{JSON.stringify(this.state)}</p>
        <p>
          I am {this.state.name} and age: {this.state.age}. My channel is
          {this.state.channel}
        </p>
      </div>
    );
  }
}

export default ChildComponent;
