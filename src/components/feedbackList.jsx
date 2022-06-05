import { useContext } from "react"
import FeedbackContext from "../context/feedBackContext"
import FeedBackItem from "./feedback_item"
import {motion,AnimatePresence} from 'framer-motion'



function FeedbackList() {
 const {Feedback}=useContext(FeedbackContext)

if(!Feedback || Feedback.lengeth ===0 ||Feedback===''){
    return <h1>no FeedBack</h1>
}
  return (
      <div className="feedback-list">
          <AnimatePresence>
     {Feedback.map(data=>
     <motion.div 
     key={data.id}
     initial={{opacity:0}}
     animate={{opacity:1}}
     exit={{opacity:0}}
     >
     <FeedBackItem 
            key={data.id} 
            {...data} 
            />
            </motion.div>
            )}
            
            </AnimatePresence>
     </div>
  )
} 

export default FeedbackList