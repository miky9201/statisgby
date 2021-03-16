import React from 'react';
import TackleComponent from './tackleComponents/TackleComponent';
import PossessionComponent from './possessionComponents/PossessionComponent';

const App = () => {
      return (
            <div className="App pt-pb-30">
                  <h1>STATISGBY</h1>
                  <div className="flex-row-space-around-start">
                        <TackleComponent title="Plaquages" />
                        <PossessionComponent title="Possession" />
                        {/* <TackleComponent title="Occupation" /> */}
                  </div>  
            </div>
      )
}

export default App;
