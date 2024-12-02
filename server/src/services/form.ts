import MilitaryForm from "../models/idfForm"

import { idfForm } from "../types/formInterface"

export const addform = async (form :idfForm)=>{
    try{
        if(!form)
            throw new Error("missing form")
        form.status = "submitted";
        const newForm = new MilitaryForm(form);
        return await newForm.save()

    }
    catch(err){
        console.log(err)
        throw new Error("cant save new form");
    }
}