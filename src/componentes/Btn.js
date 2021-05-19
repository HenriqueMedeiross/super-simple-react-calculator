import React from 'react'

function Btn(props) {

    return (
            <button onClick={ () => props.getValue(props.value) }>  {/* catch the button value and pass it to the Calculator component */}
                {props.value}
            </button>
    )
}

export default Btn
