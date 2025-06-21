import { createSlice } from "@reduxjs/toolkit";

const ColorSlice=createSlice({
    name:"mycolor",
    initialState:{
        color:"black"
    },
    reducers:{
        bgcolorChange:(state,actions)=>{
            state.color=actions.payload
        }
    }
})

export const {bgcolorChange}=ColorSlice.actions;
export default ColorSlice.reducer;
