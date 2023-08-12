import {applyMiddleware, combineReducers, createStore} from "redux";

import {carsReducer} from "./carsReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
cars: carsReducer
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export {
    store
}