import React from 'react';
import Timer from '../generalComponents/timerComponents/Timer';
import '../App.css';

const PossessionComponent = ({ title }) => {

      return (
      <div className="main-component mt-30 pt-pb-30 pl-pr-10">
            <h2>{title}</h2>
            <div className="mt-30">
                  <Timer />
            </div>
      </div>
      );
}

export default PossessionComponent;
