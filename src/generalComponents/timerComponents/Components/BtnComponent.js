import React from 'react';

function BtnComponent(props) {
      return (
            <div>
                  {(props.status === 0)? 
                        <button className="stopwatch-btn stopwatch-btn-gre" onClick={props.start}>Attaque</button> 
                        : ""
                  }

                  {(props.status === 1)? 
                        <div>
                              <button className="stopwatch-btn stopwatch-btn-red" onClick={props.stop}>Défense</button>
                              <button className="stopwatch-btn stopwatch-btn-yel" onClick={props.reset}>Reset</button>
                        </div> 
                        : ""
                  }

                  {(props.status === 2)? 
                        <div>
                              <button className="stopwatch-btn stopwatch-btn-gre" onClick={props.resume}>Attaque</button>
                              <button className="stopwatch-btn stopwatch-btn-yel" onClick={props.reset}>Reset</button>
                        </div> 
                        : ""
                  }
            </div>
      );
}

export default BtnComponent;