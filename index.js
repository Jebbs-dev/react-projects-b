import react from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
// import Home from './ExpenseManager';
// import Home from './CourseGoals'
// import Home from "./UserInformation";
// import Control from "./DummyApp";
// import {AuthContextProvider} from "./DummyApp/Store/auth-context";
// import Home from './Restaurant'
// import Home from "./ShoppingApp";
// import Home from "./StarWars";
// import CountControl from "./CustomComponent";
// import MainPart from "./SetTask";
// import Home from "./FormMat";
// import Home from "./Redux/Counter";
// import store from "./Redux/Counter/Store/redux-logic";
import Home from "./Redux/ShopApp";
import store from "./Redux/ShopApp/Store/redux-logic";
// import { AuthContextProvider } from "./ShoppingApp/Store/auth-context";
// import {  BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById("root")
);
