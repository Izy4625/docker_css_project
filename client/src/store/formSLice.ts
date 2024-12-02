import { ActionReducerMapBuilder, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DataStatus, formState } from "../types/redux";
import { IdfForm ,CombatPreferences,TechPreferences,SupportPreferences} from "../types/form";

const initialState: formState = {
    error: null,
    status: DataStatus.IDLE,
    form: {
        name: "",
        personalNote: "",
        combatPreferences: {
            golani:0,
            armor: 0,
            artillery:0,
            searchAndRescue:0
        },
        supportPreferences: {
            targetingNCO: 0,
            nimrodiSergeant: 0,
            cook: 0,
            sandwichFiller: 0,
        },
        techPreferences: {
            fullstack: 0,
            data: 0,
            devops: 0,
            duty: 0,
        },
    }
}


export const sendForm = createAsyncThunk(
    "form/post",
    async (form: IdfForm, thunkAPi) => {
        try {
            const res = await fetch(`https://localhost:3000/api/idfForm`,
                {
                    method: "post",
                    headers: {
                        "Content-Type": "application/json",

                    },
                    body: JSON.stringify(form)

                }
            )
            if (res.status != 200) {
                thunkAPi.rejectWithValue("cant send form, please try again later")
            }
            const data = await res.json()
            return data
        } catch (err) {
            thunkAPi.rejectWithValue("cant send form, please try again later")

        }
    }

);

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        updateFormCombat: (state, action: PayloadAction<{ num: number; name:keyof CombatPreferences}>) => {

            if (state.form) {
                console.log(state);
                
                state.form.combatPreferences[action.payload.name] = action.payload.num;
                console.log(action);
                
            }
        },
        updateFormTech: (state, action: PayloadAction<{ num: number; name: keyof TechPreferences }>) => {
            if (state.form) {
                state.form.techPreferences[action.payload.name] = action.payload.num;
            }
            
        },
        updateFormJobnick: (state, action: PayloadAction<{ num: number; name: keyof SupportPreferences }>) => {
          
            if (state.form) {
                state.form.supportPreferences[action.payload.name] = action.payload.num;
            }
        },
    },
    extraReducers: (builder: ActionReducerMapBuilder<formState>) => {
        builder
            .addCase(sendForm.pending, (state) => {
                state.status = DataStatus.LOADING;
                state.error = null;
                state.form = null
            })
            .addCase(sendForm.fulfilled, (state, action) => {
                state.status = DataStatus.SUCCESS;
                state.error = null;
                state.form = action.payload as unknown as IdfForm
            })
            .addCase(sendForm.rejected, (state, action) => {
                state.status = DataStatus.LOADING;
                state.error = action.error as string;
                state.form = null
            });


    }
})

export const { updateFormCombat, updateFormTech, updateFormJobnick } = formSlice.actions;
export default formSlice