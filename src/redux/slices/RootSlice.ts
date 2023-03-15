import { createSlice } from "@reduxjs/toolkit"

const rootSlice = createSlice({
    name: "root",
    initialState: {
        brand: "brand",
        flavor: 'flavor',
        name: 'name',
        year: 'year',
    },
    reducers: {
        // Action is submitted elsewhere - written to state.brand
        chooseBrand: (state, action) => { state.brand = action.payload }, // All we're doing is setting the input to the state.make
        chooseFlavor: (state, action) => { state.flavor = action.payload },
        chooseName: (state, action) => { state.name = action.payload },
        chooseYear: (state, action) => { state.year = action.payload },
    }
})

export const reducer = rootSlice.reducer;
export const { chooseBrand, chooseFlavor, chooseName, chooseYear } = rootSlice.actions
