import React, { useState } from 'react';
import TackleCounter from './TackleCounter';
import StatTackleDisplayer from './StatTackleDisplayer';
import '../App.css';

const TackleComponent = ({ title }) => {
      
      const [tackleNb, setTackleNb] = useState(0);
      const [missedTackleNb, setMissedTackleNb] = useState(0);

      return (
      <div className="main-component">
            <h2>{title}</h2>
            <div>
                  <TackleCounter tackleNb={tackleNb} setTackleNb={setTackleNb} color="green" />
                  <TackleCounter tackleNb={missedTackleNb} setTackleNb={setMissedTackleNb}  color="red" />
            </div>
            <StatTackleDisplayer num1={tackleNb} num2={missedTackleNb} />
      </div>
      );
}

export default TackleComponent;
