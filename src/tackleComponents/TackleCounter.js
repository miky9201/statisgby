import React from 'react';

const TackleCounter = ({tackleNb, setTackleNb, color}) => {

    const handleChange = () => {
      setTackleNb(tackleNb + 1);
    }

    return(
        <div className="mt-30">
            <div className={"tackle counter-display " + color} onClick={handleChange}>
                <p>{tackleNb}</p>
            </div>
            {color === "green" ? "Plaquage réussi !" : "Plaquage Manqué !"}  
        </div>
    )
}

export default TackleCounter;