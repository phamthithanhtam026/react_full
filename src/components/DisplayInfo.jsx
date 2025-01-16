import React, { useEffect } from "react";

class DisplayInfo extends React.Component {
  render() {
    console.log("check props: ", this.props);
    const { student, fruits, handleDisplay } = this.props;
    const { name, age } = student;
    console.log("check fruits: ", fruits);
    return (
      <div>
        <p>Hello displayInfo</p>
        <p>
          {" "}
          I am {name}, age: {age}
        </p>
        <p>{fruits}</p>
        <p>{JSON.stringify(student)}</p>
        <p>{handleDisplay()}</p>
      </div>
    );
  }
}
export default DisplayInfo;
