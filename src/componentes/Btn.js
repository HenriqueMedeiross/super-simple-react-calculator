import React from 'react'

function Btn(props) {

    return (
        <div className="mybtns">
            <button className={props.name} onClick={ () => props.btnFunc(props.value) }>  {/* Pega o valor do botao e passa pra calculadora */}
                {props.value}
            </button>
        </div>
    ) 
}

export default Btn
