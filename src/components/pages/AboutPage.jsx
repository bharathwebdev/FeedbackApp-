import Card from "../shared/card";
import { Link } from "react-router-dom";
const AboutPage=()=>{
    return(
       <Card>
           <h1>About this site</h1>
           <p>it is s feedback site where people give there feedback about something 
           </p>
        <Link  to='/'>Back to Home</Link>
       </Card>
        
    )
}
export default AboutPage;