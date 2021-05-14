import React ,{ useState }from 'react'
import Display from './Display'
import Btn from './Btn'


function Calculadora() {

    // Variable declaration
    const [btnNumber, setBtnNumber] = useState();
    const [btnAction, setAction] = useState();
    const [displayedString, setDisplayedString] = useState("");
    const allNumbBtnValues = ["1","2","3","4","5","6","7","8","9","0"];
    const allActionBtnValues = ["+", "-", "*", "/", "ce", "c", "="];

    // Append the clicked number to the complete string numbar and pass it to display
    const btnNumberFunction = (numb) => {
        setBtnNumber(numb);
        setDisplayedString(displayedString+numb);
    }
     

    
    return (
        <div>
            <div>TESTES
                <button onClick={()=>console.log(displayedString)}>displayedString</button>
                <button onClick={()=>console.log(typeof btnAction)}>typeof btnAction</button>
            </div>
            <h1>JS CALCULATOR</h1>

            <div>
                <Display dispString = {displayedString}/>
            </div>

            {/*Button mapping*/}
            <div className="Numpad"> 
                { allNumbBtnValues.map(function(val) 
                    {
                        return <Btn {... console.log(displayedString)}
                                    btnFunc={btnNumberFunction}
                                    name="numbers" 
                                    value={val}
                                />
                    })
                }
                { allActionBtnValues.map(function(val) 
                    {
                        return <Btn 
                                    btnFunc={setAction} 
                                    name="actions" 
                                    value={val}
                                />
                    })
                }
            </div>
        </div>
    )
}

export default Calculadora