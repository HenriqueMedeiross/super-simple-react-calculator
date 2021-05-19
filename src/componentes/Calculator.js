import React, { useState } from 'react'
import Btn from './Btn'
import Display from './Display'

function Calculator() {
    
    const [equationString, setEquationString] = useState("")
    const [currentValue, setCurrentValue] = useState("")

    const clickedValue = (e)=>
    {
        setCurrentValue(currentValue+e)
        setEquationString(equationString+e)
        if (e==="="){setEquationString(calculate())}
    }

    const clearall = ()=> 
    {
        setCurrentValue("")
        setEquationString("")
    }

    const backspace = ()=>
    {
        if (currentValue != "")
        {
            setCurrentValue(currentValue.slice(0,-1))
            setEquationString(equationString.slice(0,-1))
        }
    }
    
    function calculate()
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
