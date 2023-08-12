import {carsService as carService} from "../../services";

const carsActionsTypes = {
    SET: 'SET',
    DELETE: 'DELETE',
    CREATE: 'CREATE',
    SET_CAR_FOR_UPDATE: 'SET_CAR_FOR_UPDATE'
}

const carsActions = {
    set: (payload) => ({type: carsActionsTypes.SET, payload}),
    del: (payload) => ({type: carsActionsTypes.DELETE, payload}),
    create: (payload) => ({type: carsActionsTypes.CREATE, payload}),
    update: (payload) => ({type: carsActionsTypes.SET_CAR_FOR_UPDATE, payload}),
}

const getCars = () => async dispatch => {
    const {data} = await carService.getAll();
    dispatch(carsActions.set(data))
}

export {
    carsActions,
    carsActionsTypes,
    getCars
}