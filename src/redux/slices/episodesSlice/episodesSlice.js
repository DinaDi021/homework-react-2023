import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejected} from "@reduxjs/toolkit";

import {episodesService} from "../../../services";

const initialState = {
    episodes: [],
    prevPage: null,
    nextPage: null,
    errors: null
}

const getEpisodes = createAsyncThunk (
    'episodesSlice/getEpisodes',
    async (page, thunkAPI ) => {
        try {
            const {data} = await episodesService.getAll(page);
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)



const episodesSlice = createSlice ({
    name: 'episodesSlice',
    initialState,
    reducers: {

    },
    extraReducers: builder =>
        builder
            .addCase(getEpisodes.fulfilled, (state, action) => {
                const { results, info } = action.payload;

                state.episodes = results.map(episode => ({
                    ...episode,
                    characters: episode.characters.map(character => character.split('/').slice(-1)[0]).join(',')
                }));
                state.prevPage = info.prev;
                state.nextPage = info.next;
                state.errors = null;
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

const {reducer: episodesReducer, actions} = episodesSlice;

const episodesActions = {
    getEpisodes
}

export {
    episodesReducer,
    episodesActions
}