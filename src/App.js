import './App.css';
import React, {useState} from "react";
import BtnContainer from './components/BtnContainer';
import TimerContainer from './components/TimerContainer';

function App() {
  const [timer, setTimer] = useState({ms:0, s:0, m:0, h:0});
  const [status, setStatus] = useState(0);
  const [interv, setInterv] = useState();
  const {ms, s , m, h } = timer;
  var updatedMs = ms, updatedS=s, updatedM=m, updatedH = h;
  
  const start= ()=>{
    setInterv(setInterval(runTimer, 10));
    
    setStatus(1);
  }
  const runTimer = ()=>{
    if(updatedMs===99){
        updatedMs=0;
        updatedS++;
    }
    if(updatedS===59){
        updatedS=0;
        updatedM++;
    }
    if(updatedM===59){
        updatedM=0;
        updatedH++;
    }
    updatedMs++;
    setTimer({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH})
  }
  const pause = ()=>{
    clearInterval(interv);
    setStatus(0);
  }
  const reset = ()=>{
    clearInterval(interv);
    setTimer({ms:0, s:0, m:0, h:0});
    setStatus(0);
  }
  
  return (
    <div className='bg-teal-500 h-screen flex items-center justify-center'>
      <div className='bg-white w-[40%] h-[60%]'>
        <div className=''>
          <h1 className='text-6xl text-teal-400 text-center mt-[5%]'>STOPWATCH</h1>
          <TimerContainer timer={timer}/>
          <BtnContainer start={()=>start()} status={status} pause= {()=>pause()} reset={()=>reset()} />
        </div>
      </div>
    </div>
  );
}

export default App;
