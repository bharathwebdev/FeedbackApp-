import Card from "./shared/card";
import { useEffect } from "react";
import { useState } from "react";
import Button from "./button";
import RatingSelect from "./ratingselect";
import { useContext } from "react";
import FeedbackContext from "../context/feedBackContext";

const FeedbackForm=()=>{
    const {addfeedback,editfeedback,updatesamefeedback}=useContext(FeedbackContext)
    const [text,settext] = useState('')
    const [btndisbled,setbtndisabled]=useState(true)
    const [message , setmessage] = useState('')
    const [rating , setrating]=useState(10)

    useEffect(()=>{
    if(editfeedback.edit===true){
        settext(editfeedback.item.text)
        setrating(editfeedback.item.rating)
        setbtndisabled(false)
    }
    },[editfeedback])
    const handleChange=(e)=>{
       if (text===''){
           setbtndisabled(true)
           setmessage(true)
       }else if(text !== '' && text.trim().length<=10){
           setbtndisabled(true)
           setmessage('text must be 10 or more  character')
       }else {
           setbtndisabled(false)
           setmessage(null)
       }
     settext(e.target.value)
 
    }
    const handlesubmit=(e)=>{
    e.preventDefault()
    if (text.trim().length > 10){
        const newFeedback ={
            text,
            rating,
          
        }
        if(editfeedback.edit===true){
            updatesamefeedback(editfeedback.item.id,newFeedback)
        }else {
            addfeedback(newFeedback)
        }
        
    }
    }

    return (

         <Card>
             <form onSubmit={handlesubmit}>
                 <h2>How would you rate your service with us ?</h2>
                 <RatingSelect select={(rating)=>setrating(rating)}/>
                 <div className="input-group">
                     <input type="text" 
                     onChange={handleChange} 
                     placeholder="write a review..."
                     value={text}s
                     />
                    <Button type='submit' isDisabled={btndisbled}>send</Button>
                 </div>
                {message && <div className="message">{message}</div>}
             </form>
         </Card>
        
    )
}
export default FeedbackForm;