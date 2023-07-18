import axios from "axios";
const { REACT_APP_BASEURL } = process.env;

export const CarsServices = {
    getCars: async (setCars) => {
        try {
            let response = await axios.get(REACT_APP_BASEURL);
            setCars(response.data)
        } catch (error) {
            console.log(error);
        }
    },

    deleteCar: async (id, setOnSave) => {
        try {
            await axios.delete(`${REACT_APP_BASEURL}/${id}`);
            setOnSave(prev => !prev);
        } catch (error) {
            console.log(error);
        }
    },

    saveCar: async (data, setOnSave, reset) => {
        try {
            await axios.post(REACT_APP_BASEURL, data);
            setOnSave((prev) => !prev);
            reset();
        } catch (error) {
            console.log(error);
        }
    },

    updateCar: async (id, car, setOnSave, setCarForUpdate, reset) => {
        try {
            await axios.put(`${REACT_APP_BASEURL}/${id}`, car);
            setOnSave((prev) => !prev);
            setCarForUpdate(null);
            reset();
        } catch (error) {
            console.log(error);
        }
    },
};

