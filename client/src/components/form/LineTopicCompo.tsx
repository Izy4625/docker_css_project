import { useAppSelector } from "../../store/store"
import React from "react";
import ButtonCompo from "./buttonCompo";
import { CombatPreferences,TechPreferences,SupportPreferences } from "../../types/form"
interface pro{
    name:  keyof CombatPreferences;
    
}
const LineTopicCompo:React.FC<pro> = ({name}) => {
    const arr1 = Object.keys(combatPreferences || {}) as Array<keyof CombatPreferences>;
    const arr = ['golaini','armor','artillery','searchAndRescue',"k","k"];
    const combatPreferences = useAppSelector((state)=> state.form.form?.combatPreferences)
  
  return (
    <>
    <h1>{name}</h1>
   <div>{arr1.map((a,index)=>(< ButtonCompo num={index} picked={combatPreferences?.golani} name={name}/>))}</div> 
    </>
  )
}

export default LineTopicCompo