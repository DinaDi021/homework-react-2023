import {carsActionsTypes} from "../actions";

const initialState = {
    cars: [],
    carForUpdate: null
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
        case carsActionsTypes.SET_CAR_FOR_UPDATE:
            return {
                ...state,
               carForUpdate: action.payload
            };
        default:
            return state
    }
}

export {
    carsReducer
}