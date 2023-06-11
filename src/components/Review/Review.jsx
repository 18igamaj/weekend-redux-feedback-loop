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
            {review.map((feed, i) => (
              <div key = {i}>
              <div>  <h3>  Feeling <span>{feed.feeling} </span> </h3> </div>
                <br></br>
                <h3> Understanding:<span>{feed.understanding}</span></h3>
                <br></br>
                <h3> Support: <span>{feed.support}</span> </h3> 
                <br></br>
                <h3> Comments: <span>{feed.comments} </span> </h3> 
                <br></br>
              </div>
            ))}
         </div>
         <button type="submit">Submit</button>
         <button onClick={handleReview}>Thank you!</button>
        
        </>
    )
}


export default Review