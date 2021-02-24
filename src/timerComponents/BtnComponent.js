import React from 'react';

const BtnComponent = (props) => {
      return (
            <div>
                  { props.status === 0 ? 
                        <button className="stopwatch-btn stopwatch-btn-gre" onClick={props.start}>Attaque</button> 
                        : null
                  }

                  { props.status === 1 ? 
                        <div>
                              <button className="stopwatch-btn stopwatch-btn-red"
                              onClick={props.stop}>Défense</button>
                              <button className="stopwatch-btn stopwatch-btn-yel"
                              onClick={props.reset}>Reset</button>
                        </div> 
                        : null
                  }

                  { props.status === 2 ? 
                        <div>
                              <button className="stopwatch-btn stopwatch-btn-gre"
                              onClick={props.resume}>Attaque</button>
                              <button className="stopwatch-btn stopwatch-btn-yel"
                              onClick={props.reset}>Reset</button>
                        </div> 
                        : null
                  }
            </div>
      );
}

export default BtnComponent;