import { useEffect, useState } from "react"
import { updateFormCombat } from "../../store/formSLice"
import { useAppDispatch } from "../../store/store"
import styles from "./ButtonCompo.module.css"

import { CombatPreferences } from "../../types/form"
interface pro{
    num: number,
    picked: number,
    name: keyof CombatPreferences
}
const ButtonCompo = ({num,picked,name}:pro) => {
    console.log(num,picked,name);
    const [number, setNumber] = useState<number>()
    
    const dispatch = useAppDispatch()
    const [target, setTarget] = useState<boolean>(false)
    useEffect(()=>{
        setNumber(num)
       if(picked===num){
        setTarget(true)
       }
    },[picked,num])
    if(!number)return
  return (
  <button onClick={(e)=>{dispatch(updateFormCombat({num:number,name:name}))}}className={`${styles.buttondiv} ${target ? styles.active : ""}`}>{num}</button>

  )
}

export default ButtonCompo