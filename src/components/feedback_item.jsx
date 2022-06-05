import Card from "./shared/card";
import {FaTimes,FaEdit}from 'react-icons/fa'
import PropTypes from 'prop-types'
import { useContext } from "react";
import FeedbackContext from "../context/feedBackContext";
const  FeedBackItem=({text,rating,id})=>{
    // console.log(prop)
    // const [rating,setrating]=useState(7)
    // const [text,settext]= useState("sample text")
    const {deletefeedback,updatefeedback} = useContext(FeedbackContext)

  return (
     <Card >
    <div className="num-display">{rating}</div>
    <button onClick={()=>deletefeedback(id)}className="close">
        <FaTimes color="red" />
    </button>
    <button className="edit" onClick={()=>updatefeedback(id,text,rating)}><FaEdit/></button>
    <div className="text-display">{text}</div>
   
    </Card>
  )
}
Card.propTypes={
    text:PropTypes.string,
    rating:PropTypes.number.isRequired
}
Card.defaultProps={
    rating:0
}
export default FeedBackItem;
