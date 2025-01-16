import React from "react";

class Form extends React.Component {
  state = {
    title: "",
  };

  handleChangeTodo(event) {
    this.setState({
      title: event.target.value,
    });
  }

  handleKeyDown(event) {
    if (event.key === "Enter") {
      this.addTodo();
    }
  }
  addTodo() {
    const todo = {
      id: `todo${Math.floor(Math.random() * 1000)}`,
      title: this.state.title,
    };
    this.props.handleAddTodo(todo);
    this.setState({
      title: "",
    });
  }
  render() {
    return (
      <div>
        <label htmlFor="title">Todo</label>
        <br />
        <input
          type="text"
          placeholder="Enter todo"
          value={this.state.title}
          onChange={(event) => this.handleChangeTodo(event)}
          onKeyDown={(event) => this.handleKeyDown(event)}
        />
        <button onClick={() => this.addTodo()}>Add</button>
      </div>
    );
  }
}

export default Form;
