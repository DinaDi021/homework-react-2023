import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";

import {carsReducer} from "./carsReducer";
import {composeWithDevTools} from "redux-devtools-extension";


const rootReducer = combineReducers({
cars: carsReducer
});

const composeEnhancers = composeWithDevTools({
    trace: true,
    traceLimit: 25
})
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export {
    store
}