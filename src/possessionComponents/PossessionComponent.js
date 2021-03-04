import React from 'react';
import PossessionCounter from './PossessionCounter';
import Timer from '../generalComponents/timerComponents/Timer';
import '../App.css';

const PossessionComponent = ({ title }) => {

      return (
      <div className="main-component">
            <h2>{title}</h2>
            <div>
                  <Timer />
                  <PossessionCounter />
            </div>
      </div>
      );
}

export default PossessionComponent;
