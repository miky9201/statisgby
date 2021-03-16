import React from 'react';

function DisplayComponent(props) {
      const hour = () => {
            if(props.time.hour === 0){
                  return '';
            } else {
                  return (
                        <span>
                              { props.time.hour >= 10 ? 
                                    props.time.hour 
                                    : "0"+ props.time.hour
                              }
                        </span>
                  )
            }
      }

      return (
            <div>
                  {hour()}
                  <span>
                        { props.time.minute >= 10 ? 
                              props.time.minute 
                              : "0"+ props.time.minute
                        }
                  </span>&nbsp;
                  <span>
                        { props.time.seconde >= 10 ? 
                              props.time.seconde 
                              : "0"+ props.time.seconde
                        }
                  </span>&nbsp;
                  <span>
                        { props.time.milliseconde >= 10 ? 
                              props.time.milliseconde 
                              : "0"+ props.time.milliseconde
                        }
                  </span>
            </div>
      );
}

export default DisplayComponent;