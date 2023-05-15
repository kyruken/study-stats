
import './App.css'
import Timer from './components/Timer'
import { useState } from 'react'

function App() {

  const [isStudy, setIsStudy] = useState(true);
  const [sessionName, setSessionName] = useState('');
  const [timedEvents, setTimedEvents] = useState([]);
  const time = new Date();
  
  const handleStudyButton = (hours, minutes, seconds) => {
    setIsStudy(prevState => !prevState);
    setTimedEvents(prevState => {
      let counter = prevState.length;
      prevState.push({
        key: counter+1,
        number: counter+1,
        name: sessionName,
        isStudy: isStudy,
        hours,
        minutes,
        seconds
      })

      return prevState;
    })
  }

  const timeElements = timedEvents.map(event => {
    return <div>
      <div>{event.number}. {event.name}</div>
      {event.isStudy ? <div>Study Session</div> : <div>Break Session</div>}
      {event.hours}:{event.minutes}:{event.seconds}
    </div>
  })

  return (
    <>
      <h1>Study stats</h1>
      <Timer 
      expiryTimestamp={time}
      handleStudyButton={handleStudyButton}
      isStudy={isStudy}
      ></Timer>
      <input type='text' placeholder='Session name' onChange={e => setSessionName(e.target.value)}></input>
      {timeElements}
    </>
  )
}

export default App
