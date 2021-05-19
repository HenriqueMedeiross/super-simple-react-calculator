import React, { useState } from 'react'
import Btn from './Btn'
import Display from './Display'

function Calculator() {
    
    const [equationString, setEquationString] = useState("") // Keep track of the full equation
    const [currentValue, setCurrentValue] = useState("") // The current equation value/values to be appended to the equation

    const clickedValue = (e)=> // Handle the click and append to the current and equation values
    {
        setCurrentValue(currentValue+e)
        setEquationString(equationString+e)
        if (e==="="){setEquationString(calculate())}
    }

    const clearall = ()=> // Handle the C button and clear the 2 displays
    {
        setCurrentValue("")
        setEquationString("")
    }

    const backspace = ()=> // Handle the CE button and clears only the current value if not empty
    {
        if (currentValue != "")
        {
            setCurrentValue(currentValue.slice(0,-1))
            setEquationString(equationString.slice(0,-1))
        }
    }
    
    function calculate() // This is kind of a cheat method, but a valid one, it uses eval function to return the result of a string equation
    {
        try {
            var result = eval(equationString)
            setCurrentValue("")  
        } catch (error) {
        }
        
        return result
    }

    
    return (
        <div className="Calculator">
            <Display holeEquation={equationString} currentValue={currentValue} />
            <div className = "Numpad">
                <div>
                    <Btn value="(" getValue={clickedValue} />
                    <Btn value=")" getValue={clickedValue} />
                    {/* Next 2 buttons work differently */}
                    <Btn value="C" getValue={clearall} /> 
                    <Btn value="CE" getValue={backspace} />
                </div>
                <div>
                    <Btn value="7" getValue={clickedValue} />
                    <Btn value="8" getValue={clickedValue} />
                    <Btn value="9" getValue={clickedValue} />
                    <Btn value="/" getValue={clickedValue} />
                </div>
                <div>
                    <Btn value="4" getValue={clickedValue} />
                    <Btn value="5" getValue={clickedValue} />
                    <Btn value="6" getValue={clickedValue} />
                    <Btn value="*" getValue={clickedValue} />
                </div>
                <div>
                    <Btn value="1" getValue={clickedValue} />
                    <Btn value="2" getValue={clickedValue} />
                    <Btn value="3" getValue={clickedValue} />
                    <Btn value="-" getValue={clickedValue} />
                </div>
                <div>
                    <Btn value="0" getValue={clickedValue} />
                    <Btn value="." getValue={clickedValue} />
                    <Btn value="=" getValue={clickedValue} />
                    <Btn value="+" getValue={clickedValue} />
                </div>
            </div>
        </div>
    )
}

export default Calculator
