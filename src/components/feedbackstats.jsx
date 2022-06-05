
import { useContext } from 'react'
import FeedbackContext from '../context/feedBackContext'
const FeedbackStats=()=>{
    const {Feedback} = useContext(FeedbackContext)
    //calculate average
    let average = Feedback.reduce((acc,cur)=>{
        return acc + cur.rating
    },0)/Feedback.length

    average = average.toFixed(1).replace(/[.,]0$/,'')
   
    return (
        <div className="feedback-stats">
            <h4>{Feedback.length} Reviews</h4>
             <h4>Average Rating : {isNaN(average) ? 0 : average} </h4>
        </div>
    )

}

export default FeedbackStats;