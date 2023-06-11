import { useHistory } from "react-router-dom"
import { useSelector,useDispatch } from "react-redux"

function Comments({setComments, comments}) {

const history = useHistory()

const review = useSelector(state => state.review)

const dispatch = useDispatch()


const handleCommClick = () => {
    history.push('/review')

    dispatch({
        type: 'ADD_REVIEW',
        payload: {comments}
      })
}

    return (
            <>
          <h1>Leave a Comment!</h1>
        <br></br>
        <label>Comments?</label>
        <br></br>
        <input type="text"
        placeholder="Comments?"
        onChange={(e) => setComments(e.target.value)}
        />
  <button onClick={handleCommClick}>
     Next
    </button>
            </>
  

        
 )
}

export default Comments