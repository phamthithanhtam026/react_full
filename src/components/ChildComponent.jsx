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
  render() {
    return (
      // JSX
      <p>Hello ChildComponent with React</p>
    );
  }
}

export default ChildComponent;
