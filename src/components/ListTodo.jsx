import React from "react";
import Form from "./Form";

class ListTodo extends React.Component {
  state = {
    listTodo: [
      {
        id: "todo1",
        title: "Washing dishes",
      },
      {
        id: "todo2",
        title: "Go shopping",
      },
      {
        id: "todo3",
        title: "Playing games",
      },
    ],
    editTodo: {},
  };

  handleAddTodo(todo) {
    const currentListTodo = this.state.listTodo;
    this.setState({
      listTodo: [...currentListTodo, todo],
    });
  }

  handleDeleteTodo(todoId) {
    let currentListTodo = this.state.listTodo;
    currentListTodo = currentListTodo.filter((item) => item.id !== todoId);
    this.setState({
      listTodo: currentListTodo,
    });
  }

  handleEditTodo(todo) {
    const { editTodo, listTodo } = this.state;
    const isEmptyObject = Object.keys(editTodo).length === 0;

    this.setState({
      editTodo: todo,
    });
    if (!isEmptyObject && editTodo.id === todo.id) {
      let currentListTodo = [...listTodo];
      let findIndexEditTodo = currentListTodo.findIndex(
        (item) => item.id === editTodo.id
      );
      currentListTodo[findIndexEditTodo].title = editTodo.title;
      this.setState({
        listTodo: currentListTodo,
        editTodo: {},
      });
    }
  }

  handleChangeEditTodo(event) {
    const currentEditTodo = { ...this.state.editTodo };
    currentEditTodo.title = event.target.value;
    this.setState({
      editTodo: currentEditTodo,
    });
  }

  handleKeyDown(event, todo) {
    if (event.key === "Enter") {
      this.handleEditTodo(todo);
    }
  }

  render() {
    const { editTodo, listTodo } = this.state;
    const isEmptyObject = Object.keys(editTodo).length === 0;
    return (
      <div>
        <Form handleAddTodo={(todo) => this.handleAddTodo(todo)} />
        <br />
        {listTodo &&
          listTodo.length > 0 &&
          listTodo.map((item, index) => {
            return (
              <div key={item.id}>
                <p>
                  {isEmptyObject ? (
                    <span>
                      {index + 1} - {item.title}
                    </span>
                  ) : (
                    <>
                      {editTodo.id === item.id ? (
                        <span>
                          {index + 1} -{" "}
                          <input
                            type="text"
                            value={editTodo.title}
                            onChange={(event) =>
                              this.handleChangeEditTodo(event)
                            }
                            onKeyDown={(event) =>
                              this.handleKeyDown(event, item)
                            }
                          />
                        </span>
                      ) : (
                        <span>
                          {index + 1} - {item.title}
                        </span>
                      )}
                    </>
                  )}

                  <button onClick={() => this.handleEditTodo(item)}>
                    {!isEmptyObject && editTodo.id === item.id
                      ? "Save"
                      : "Edit"}
                  </button>

                  <button onClick={() => this.handleDeleteTodo(item.id)}>
                    Delete
                  </button>
                </p>
              </div>
            );
          })}
      </div>
    );
  }
}

export default ListTodo;
