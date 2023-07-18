import axios from "axios";
const {REACT_APP_BASEURL} = process.env;

export const CarsServices = {
    getCars: async (setCars) => {
        try {
            let response = await axios.get(REACT_APP_BASEURL);
            setCars(response.data)
        } catch (error) {
            console.log(error);
        }
    }
}