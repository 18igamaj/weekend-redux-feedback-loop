import {useHistory} from 'react-router-dom'


function Thank() {


    const history = useHistory()
    const handleGoBack = () => {


        history.push('/')

        

    }

    return (
        <>
        <h2> Thank you for your feedback!</h2>

        <h3> Your Feedback is Greatly Appreciated!</h3>

        <button onClick={handleGoBack} type='submit'>Submit</button>
        </>
    )
}

export default Thank