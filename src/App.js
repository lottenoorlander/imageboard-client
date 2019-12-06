import "./App.css";
import store from "./store";
import ListContainer from "./components/ListContainer";
import { Provider } from "react-redux";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ListContainer />
      </Provider>
    );
  }
}

export default App;
