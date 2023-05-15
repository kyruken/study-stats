import './App.css'
import Timer from './components/Timer'

function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer

  return (
    <>
      <h1>Study stats</h1>
      <Timer expiryTimestamp={time}></Timer>
    </>
  )
}

export default App
