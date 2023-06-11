import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
function Feeling({setFeeling, feeling}) {

const history = useHistory()

const review = useSelector(store => store.review)

const dispatch = useDispatch()

const handleFeelClick = () => {
    history.push('/understanding')

    dispatch({
        type: 'ADD_REVIEW',
        payload: {feeling}
      }) 
}

    return (
            <>
        <h1>How are you Feeling?</h1>
        <br></br>
        <label>Feeling?</label>
        <input type="number"
        placeholder="Feeling?"
        onChange={(e) => setFeeling(e.target.value)} />
  <button onClick={handleFeelClick}>
     Next
    </button>
            </>
  

        
 )
}

export default Feeling