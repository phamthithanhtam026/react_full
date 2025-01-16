import logo from "./logo.svg";
import "./App.css";
import ListTodo from "./components/ListTodo";
import DisplayInfo from "./components/DisplayInfo";
import ChildComponent from "./components/ChildComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ChildComponent />
        {/* <ListTodo /> */}
        {/* <DisplayInfo /> */}
      </header>
    </div>
  );
}

export default App;
