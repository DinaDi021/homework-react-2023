import {apiService} from "./apiServices";
import {urls} from "../constants";

const carsService = {
    getAll:() => apiService.get(urls.cars),
    deleteById: (id) => apiService.delete(urls.car.byId(id)),
    create:(carInfo) => apiService.post(urls.cars, carInfo),
    updateById: (id, carInfo) => apiService.put(urls.car.byId(id), carInfo)
}

export {carsService}