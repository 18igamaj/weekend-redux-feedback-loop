import { useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

function Understanding({setUnder, understanding}) {

const history = useHistory()
const review = useSelector(state => state.review)
const dispatch = useDispatch()

const handleUnderClick = () => {

    dispatch({
        type: 'ADD_REVIEW',
        payload: {understanding}
      })

    history.push('/support')
}

    return (
            <>
          <h1>How are you Understanding?</h1>
        <br></br>
        <label>Understanding?</label>
        <br></br>
        <input type="number"
        placeholder="Understanding?"
        onChange={(e) => setUnder(e.target.value)} />
  <button onClick={handleUnderClick}>
     Next
    </button>
            </>
  

        
 )
}

export default Understanding