const carsActionsTypes = {
    SET: 'SET',
    DELETE: 'DELETE',
    CREATE: 'CREATE',
    UPDATE: 'UPDATE'
}

const carsActions = {
    set: (payload) => ({type: carsActionsTypes.SET, payload}),
    del: (payload) => ({type: carsActionsTypes.DELETE, payload}),
    create: (payload) => ({type: carsActionsTypes.CREATE, payload}),
    updt: (payload) => ({type: carsActionsTypes.UPDATE, payload})
}

export {
    carsActions,
    carsActionsTypes
}