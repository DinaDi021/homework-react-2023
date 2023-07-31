import axios from "axios";
const { REACT_APP_BASEURL } = process.env;

export const CarsServices = {
    CarsServices: () => axios.get(REACT_APP_BASEURL),
    deleteCar: (id) => axios.delete(`${REACT_APP_BASEURL}/${id}`),
    saveCar: (data) => axios.post(REACT_APP_BASEURL, data),
    updateCar: (id, car) => axios.put(`${REACT_APP_BASEURL}/${id}`, car)
};