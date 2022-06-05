import { createContext,useState } from "react";
import {v4 as uuidv4} from 'uuid'
import FeedbackData from "../data/FeedBackData";
const FeedbackContext = createContext()
export const FeedbackProvider=({children})=>{

    const [Feedback,setFeedBack]= useState(FeedbackData)
    const [editfeedback,seteditfeedback] = useState({
        item:{},
        edit:false,
    })

//add feed back
    const addfeedback=(newfeedback)=>{
        newfeedback.id=uuidv4() 
        console.log(newfeedback)
        setFeedBack([newfeedback,...Feedback])
      
      }
//edit feed back 
const updatefeedback=(id,text,rating)=>{
       let item={
           id,
           text,
           rating
       }
       console.log(item)
    seteditfeedback({
        item,
        edit:true,
    })
}
//update the item in same place
const updatesamefeedback=(id,upditem)=>{
    setFeedBack(Feedback.map((data)=> (data.id===id ? {...data,...upditem}:data)))
}
//delete feedback
    const deletefeedback=(id)=>{
        if (window.confirm("Are you sure you wnat to delete ? ")){
          setFeedBack(Feedback.filter(data=>(data.id !== id)))
        }
       }

    return <FeedbackContext.Provider 
    value={{
    Feedback,
    deletefeedback,
    addfeedback,
    updatefeedback,
    editfeedback,
    updatesamefeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}
export default FeedbackContext;