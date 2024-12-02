import React, { useEffect } from "react"
import LineTopicCompo from "./lineTopicCompo"
import { CombatPreferences,TechPreferences,SupportPreferences } from "../../types/form"
interface pro{
    type: 'combat' |'jobnick'  | 'high-tech'
}
const TrackChooseCompo: React.FC<pro> = ({type}) => {
  
    const arr1 = Object.keys(combatPreferences || {}) as Array<keyof CombatPreferences>;
  return (
    <div>
        {arr1.map((e)=>(<LineTopicCompo name={e}/>))}
    </div>
  )
}

export default TrackChooseCompo