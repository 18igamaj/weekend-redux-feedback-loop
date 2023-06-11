import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
function Review() {

    const history = useHistory() 
    const review = useSelector(store => store.review)
    const dispatch = useDispatch()

    const handleReview = () => {

        dispatch({
            type: 'NEW_REVIEW',
        
          })
    
    
    
        history.push('/')
    }

    return (
        <>
        <h2>Review Your Feedback</h2>
         <div>
           
              <div>
                <h3> Feeling: <span>{review.feeling}</span></h3>
                
                <h3> Understanding:  <span> {review.understanding}</span></h3>
               
                <h3> Support: <span> {review.support}</span></h3>
                
                <h3> Comments:  <span>  {review.comments}</span></h3>
               
                <br></br>
              </div>
         
         </div>
         <button type="submit">Submit</button>
         <button onClick={handleReview}>Thank you!</button>
        
        </>
    )
}


export default Review