import React from 'react'

function Btn(props) {

    return (
            <button onClick={ () => props.getValue(props.value) }>  {/* Pega o valor do botao e passa pra calculadora */}
                {props.value}
            </button>
    )
}

export default Btn
