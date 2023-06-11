import { useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

function Support({setSupport, support}) {

const history = useHistory()

const review = useSelector(state => state.review)
const dispatch = useDispatch()


const handleSupportClick = () => {
    history.push('/comments')

    dispatch({
        type: 'ADD_REVIEW',
        payload: {support}
      })
}

    return (
            <>
          <h1>How well are you Supported?</h1>
        <br></br>
        <label>Support?</label>
        <br></br>
        <input type="number"
        placeholder="Support?"
        onChange={(e) => setSupport(e.target.value)} />
  <button onClick={handleSupportClick}>
     Next
    </button>
            </>
  

        
 )
}

export default Support