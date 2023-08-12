import {apiService} from "./apiServices";
import {urls} from "../constants";

const carsService = {
    getAll:() => apiService.get(urls.cars),
    deleteById: (id) => apiService.delete(urls.car.byId(id)),
    create:(data) => apiService.post(urls.cars, data),
    updateById: (id, data) => apiService.put(urls.car.byId(id), data)
}

export {carsService}