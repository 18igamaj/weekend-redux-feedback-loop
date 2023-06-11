import { useHistory } from "react-router-dom"


function Understanding({setUnder}) {

const history = useHistory()

const handleClick = () => {
    history.pushState('/support')
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
  <button onClick={handleClick}>
     Next
    </button>
            </>
  

        
 )
}

export default Understanding