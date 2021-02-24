import React from 'react';
import PossessionCounter from './possessionComponents/PossessionCounter';
import './App.css';

const PossessionComponent = ({ title }) => {

      return (
      <div className="main-component">
            <h2>{title}</h2>
            <div>
                  <PossessionCounter />
            </div>
      </div>
      );
}

export default PossessionComponent;
