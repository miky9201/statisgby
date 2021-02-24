import React from 'react';

const StatTackleDisplayer = ({num1, num2}) => {

      const adder = (num1, num2) => num1 + num2;

      const rate = (num1, num2) => {
            const percentage = (num1 / (num1 + num2)*100);
            return isNaN(percentage) ? 0 : percentage.toFixed(1) + "%"
      }

      return(
            <div className="mt-50">
                  <div className="stat-display">
                        <p>
                              {adder(num1, num2)} <br />
                              Total Plaquages !
                        </p>
                  </div>
                  
                  <div className="stat-display">
                        <p>
                              {rate(num1, num2)} <br />
                              Taux de plaquages réussis !
                        </p>
                  </div>
                  
            </div>
      )
}

export default StatTackleDisplayer;