import React from "react";
import axios from "axios";
const {REACT_APP_BASEURL} = process.env;

export const CarsServices = {
    getCars: async () => {
        try {
            let response = await axios.get();
            return response.data;
        } catch (e) {
            console.error(e);
        }
    },

};