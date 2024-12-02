import {ActionReducerMapBuilder,createAsyncThunk,createSlice} from "@reduxjs/toolkit";
import { DataStatus,formState } from "../types/redux";
import { IdfForm } from "../types/form";

const initialState:formState={
    error: null,
    status:DataStatus.IDLE,
    form: null
}

export const sendForm = createAsyncThunk(
    "form/post",
    async(form:IdfForm,thunkAPi)=>{
        try{
            const res = await fetch(`https://localhost:3000/api/idfForm`,
                {
                    method: "post",
                    headers:{
                        "Content-Type":"application/json",

                    },
                    body: JSON.stringify(form)

                }
            )
            if(res.status != 200)
            {
             thunkAPi.rejectWithValue("cant send form, please try again later")
            }
            const data =await res.json()
            return data
        }catch(err){
          thunkAPi.rejectWithValue("cant send form, please try again later")

        }
    }
    
);

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers:{},
    extraReducers:(builder: ActionReducerMapBuilder<formState>)=>{
        builder
          .addCase(sendForm.pending,(state)=>{
            state.status=DataStatus.LOADING;
            state.error = null;
            state.form = null
          })
          .addCase(sendForm.fulfilled,(state,action)=>{
            state.status=DataStatus.SUCCESS;
            state.error = null;
            state.form = action.payload as unknown as IdfForm
          })
          .addCase(sendForm.rejected,(state,action)=>{
            state.status=DataStatus.LOADING;
            state.error = action.error as string;
            state.form = null
          });
          

    }
})
export default formSlice