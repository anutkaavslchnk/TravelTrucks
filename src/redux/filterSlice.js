import { createSlice } from "@reduxjs/toolkit"

 const initialState={
  
	filter:''
}
export const filtersSlice=createSlice({
    name:"filters",
    initialState,
    reducers:{
        changeFilter:(state, action)=>{
state.filter=action.payload;

        }
    }
})
export const filtersSliceReducer=filtersSlice.reducer;
export const {changeFilter}=filtersSlice.actions;