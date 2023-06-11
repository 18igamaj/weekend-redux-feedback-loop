import { useHistory } from "react-router-dom"


function Understanding({setFeeling}) {

const history = useHistory()

const handleClick = () => {
    history.pushState('/understanding')
}

    return (
            <>
        <label>How are you Feeling?</label>
        <br></br>
        <input type="number"
        placeholder="Feeling?"
        onChange={(e) => setFeeling(e.target.value)} />
  <button onClick={handleClick}>
     Next
    </button>
            </>
  

        
 )
}

export default Understanding