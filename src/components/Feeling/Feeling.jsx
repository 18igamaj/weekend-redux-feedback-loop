import { useHistory } from "react-router-dom"


function Feeling({setFeeling}) {

const history = useHistory()

const handleClick = () => {
    history.pushState('/understanding')
}

    return (
            <>
        <h1>How are you Feeling?</h1>
        <br></br>
        <label>Feeling?</label>
        <input type="number"
        placeholder="Feeling?"
        onChange={(e) => setFeeling(e.target.value)} />
  <button onClick={handleClick}>
     Next
    </button>
            </>
  

        
 )
}

export default Feeling