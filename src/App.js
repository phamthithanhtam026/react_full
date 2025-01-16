import logo from "./logo.svg";
import "./App.css";
import ListTodo from "./components/ListTodo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <ChildComponent /> */}
        <ListTodo />
      </header>
    </div>
  );
}

export default App;
