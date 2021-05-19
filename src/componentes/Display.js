import React, { useState } from 'react'

function Display(props) {


    return(
        // Simply get's the 2 values generated in the Calculator component and display them
        <div className='Display'> 
            <div>
                <input className="Disp1" readOnly value={props.holeEquation}></input>
            </div>
            <div>
                <input className="Disp2" readOnly value={props.currentValue}></input>
            </div>
        </div>
    )
}

export default Display
