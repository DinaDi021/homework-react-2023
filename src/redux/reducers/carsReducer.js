import {carsActionsTypes} from "../actions";
import {Cars} from "../../components";

const initialState = {
    cars: []
};
const carsReducer = (state = initialState, action) => {
    switch (action.type) {
        case carsActionsTypes.SET:
            return {
                ...state, cars: action.payload
            };
        case carsActionsTypes.DELETE:
            return {
                ...state,
                cars: state.cars.filter(car => car.id !== action.payload)
            };
        case carsActionsTypes.CREATE:
            return {
                ...state,
                cars: [...state.cars, action.payload]
            };
        case carsActionsTypes.UPDATE:
            return {
                ...state,
                cars: state.cars.map(car => {
                    if (car.id === action.payload.id) {
                        return {
                            ...car,
                            ...action.payload.updatedInfo
                        };
                    } else {
                        return car;
                    }
                })
            };
        default:
            return state
    }
}

export {
    carsReducer
}