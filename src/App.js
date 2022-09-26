import './App.css';
import Clock from './components/Clock'
import React, {useState} from "react";
function App() {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

let interval;

const startTimer = () => {
  const countDownDate = new Date("Sept 30, 2022").getTime();

  interval = setInterval(() => {
    const now = new Date().getTime();

  })
}


  return (
    <div className="App">
      <Clock timerDays = {timerDays} timerHours = {timerHours}
      timerMinutes = {timerMinutes} timerSeconds={timerSeconds}/>
      
    </div>
  );
}

export default App;
