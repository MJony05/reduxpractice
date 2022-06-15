import {createStore} from "redux";
import {initialState, reducer} from "./reducers/counterReducer";

const store = createStore(reducer,initialState)
export default store;