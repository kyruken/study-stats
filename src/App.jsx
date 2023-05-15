import './App.css'
import Timer from './components/Timer'
import { useState } from 'react'

function App() {

  const [isStudy, setIsStudy] = useState(true);
  const [timedEvents, setTimedEvents] = useState([]);
  const time = new Date();
  
  const handleStudyButton = (hours, minutes, seconds) => {
    setIsStudy(prevState => !prevState);
    timedEvents.push(`${hours}:${minutes}:${seconds}`)
  }

  const timeElements = timedEvents.map(event => {
    return <div>
      {event}
    </div>
  })

  return (
    <>
      <h1>Study stats</h1>
      <Timer 
      expiryTimestamp={time}
      handleStudyButton={handleStudyButton}
      ></Timer>
      {timeElements}

    </>
  )
}

export default App
