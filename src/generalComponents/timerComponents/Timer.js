import React, {useState} from 'react';
import DisplayComponent from './Components/DisplayComponent';
import BtnComponent from './Components/BtnComponent';
import './Timer.css';

function Timer() {
      const [time, setTime] = useState({ milliseconde : 0, seconde : 0, minute : 0, hour : 0 });
      const [interv, setInterv] = useState();
      const [status, setStatus] = useState(0);
      // Not started = 0
      // started = 1
      // stopped = 2

      const start = () => {
            run();
            setStatus(1);
            setInterv(setInterval(run, 10));
      };

      let updatedMs = time.milliseconde, 
      updatedS = time.seconde, 
      updatedM = time.minute, 
      updatedH = time.hour;

      const run = () => {
            if ( updatedM === 60 ) {
                  updatedH++;
                  updatedM = 0;
            }

            if ( updatedS === 60 ) {
                  updatedM++;
                  updatedS = 0;
            }

            if ( updatedMs === 100 ) {
                  updatedS++;
                  updatedMs = 0;
            }

            updatedMs++;

            return setTime({ 
                  milliseconde : updatedMs, 
                  seconde:updatedS, 
                  minute:updatedM, 
                  hour:updatedH
            });
      };

      const stop = () => {
            clearInterval(interv);
            setStatus(2);
      };

      const reset = () => {
            clearInterval(interv);
            setStatus(0);
            setTime({ 
                  milliseconde:0, 
                  seconde:0, 
                  minute:0, 
                  hour:0
            })
      };

      const resume = () => start();


      return (
            <div className="stopwatch">
                  <DisplayComponent time={time}/>
                  <BtnComponent status={status} resume={resume} reset={reset} stop={stop} start={start}/>
            </div>
      )   
}

export default Timer;
