import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejected} from "@reduxjs/toolkit";
import {characterService} from "../../../services";

const initialState = {
    characters: [],
    errors: null
}

const getCharactersById = createAsyncThunk(
    'charactersSlice/getCharactersById',
    async ({iDs}, thunkAPI) => {
        console.log('slice getCharactersById:', iDs);
        try {
            const {data} = await characterService.getByIds(iDs)
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const charactersSlice = createSlice ({
    name: 'charactersSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getCharactersById.fulfilled, (state,action) => {
                state.characters = action.payload
            })
            .addMatcher(isPending(), state => {
                state.errors = null
            })
            .addMatcher(isFulfilled(), state => {
                state.errors = null
            })
            .addMatcher(isRejected(), (state, action) => {
                state.errors = action.payload
            })

})

const {reducer: charactersReducer, actions} = charactersSlice;

const charactersActions = {
    getCharactersById
}

export {
    charactersReducer,
    charactersActions
}