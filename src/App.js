import React from 'react';
import TackleComponent from './tackleComponents/TackleComponent';
import PossessionComponent from './possessionComponents/PossessionComponent';

const App = () => {
      return (
            <div className="App">
                  <h1>STATISGBY</h1>
                  <div className="flex-row-space-around-start">
                        <TackleComponent title="Stats Plaquages" />
                        <PossessionComponent title="Stats Possession" />
                        {/*<TackleComponent title="Stats Occupation" /> */}
                  </div>  
            </div>
      )
}

export default App;
