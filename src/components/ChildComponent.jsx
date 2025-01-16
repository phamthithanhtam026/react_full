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
  constructor(props) {
    console.log("run constructor: 0");

    super(props);
    this.state = {
      name: "Eric",
      channel: "HoiDanIT",
      age: 20,
    };
  }

  componentDidMount() {
    console.log("run component did mount");
    setTimeout(() => {
      document.title = "Eric & HoiDanIT";
    }, 3000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("run component did update");
    console.log(
      "check state: ",
      this.state,
      "check prevState: ",
      prevState,
      " check props: ",
      prevProps
    );
  }

  handleChangeName(event) {
    this.setState({
      name: event.target.value,
    });
  }

  render() {
    console.log("run re-render");
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
