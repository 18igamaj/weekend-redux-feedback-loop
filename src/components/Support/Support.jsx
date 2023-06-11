import { useHistory } from "react-router-dom"


function Support({setSupport}) {

const history = useHistory()

const handleClick = () => {
    history.pushState('/comments')
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
  <button onClick={handleClick}>
     Next
    </button>
            </>
  

        
 )
}

export default Support