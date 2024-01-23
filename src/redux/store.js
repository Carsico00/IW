import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import {composeWithDevTools} from "remote-redux-devtools";
import {configureStore} from "@reduxjs/toolkit";

//const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);


const store = configureStore({reducer:reducers,middleware: [ thunk ]})

export default store;

