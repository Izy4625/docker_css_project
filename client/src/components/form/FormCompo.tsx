import { useState } from 'react'
import TrackChooseCompo from './TrackChooseCompo'

const FormCompo = () => {
const [name, setName] = useState<string>("")
const [persanol, setPersanol] = useState<string>('')
const arr =["Want To be A Combat Soldier","Want to be in Ligistics","Want to be in High-Tech"]
  return (
    <div>
        <h1>Fill Out The Form</h1>
        <input type="text" onChange={(e)=>{setName(e.currentTarget.value)}}placeholder='enter Name'/>
        

        {arr.map((a,index)=>(<TrackChooseCompo name={a} key={index} index={index}/>))}
        <input type="text" onChange={(e)=>{setPersanol(e.currentTarget.value)}} placeholder='enter Personal Message' />
    </div>
  )
}

export default FormCompo