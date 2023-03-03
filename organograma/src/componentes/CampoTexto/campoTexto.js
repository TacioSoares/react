import { useState } from 'react'
import './campoTexto.css'

const CampoTexto = (props) => {

    //let valor = 'Tácio Soares'

    const [valor, setValor] = useState('')

    const aoDigitar = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input 
                value={props.valor} 
                onChange={aoDigitar} 
                required={props.obrigatorio} 
                placeholder={props.placeholder}
            />
        </div>
    )
}


export default CampoTexto