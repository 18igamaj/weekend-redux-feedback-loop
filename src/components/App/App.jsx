import React from 'react';
import axios from 'axios';
import './App.css';
import { useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support'
import { HashRouter as Router,Route,Link } from 'react-router-dom';
import {FeedList} from '../FeedList/FeedList'



function App() {

  const [feeling, setFeeling] = useState(0)
  const [understanding, setUnder] = useState(0)
  const [support, setSupport] = useState(0)
  const [comments, setComments] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    getFeedBack()
  }, [])

  const getFeedBack = () => {

    axios.get('/feedback')
    .then(response => {

      dispatch({ 
        type: 'SET_FEED',
        payload: response.data
      })
    }).catch(err => {
      console.log('Client side get', err)
    })
  }

  const handlePost = (event) => {
    event.preventDefault()
    axios.post('/feedback', {feeling,understanding,support,comments})
    .then(response => {
      getFeedBack()

      //this will clear my inputs
      setFeeling('')
      setUnder('')
      setSupport('')
      setComments('')
    }).catch(err => {
      console.log('something is wrong with Post', err)
    })
  }

  return (
    <Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      {/* <nav>
        <Link to='/'>
          Feeling
        </Link>

      </nav> */}



      <form onSubmit={handlePost}>
        <Route path="/" exact>
        <Feeling setFeeling= {setFeeling} />
        </Route>
        <Route path="/understanding" exact>
        < Understanding setUnder= {setUnder} />
        </Route>
        <Route path="/support" exact>
        <Support setSupport= {setSupport} />
        </Route>
        <Route path="/comments" exact>
        <Feeling setComments= {setComments} />
        </Route>
      </form>
      
    </div>
    </Router> 
  );
}

export default App;
