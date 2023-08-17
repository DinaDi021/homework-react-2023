import {configureStore} from "@reduxjs/toolkit";

import {charactersReducer} from "./slices/charactersSlice/charactersSlice";
import {episodesReducer} from "./slices/episodesSlice/episodesSlice";

const store = configureStore(
    {
        reducer:{
            characters: charactersReducer,
            episodes: episodesReducer
        }
    }
)

export {
    store
}