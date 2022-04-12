import {applyMiddleware, combineReducers, createStore} from "redux";
import testReducer from "./testReducer";


let reducers = combineReducers({
	Test: testReducer,

})


let store = createStore(reducers);
window.store = store;

export default store;