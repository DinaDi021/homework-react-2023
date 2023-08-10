import {combineReducers, createStore} from "redux";

import {carsReducer} from "./carsReducer";

const rootReducer = combineReducers({
cars: carsReducer
});
const store = createStore(rootReducer);

export {
    store
}