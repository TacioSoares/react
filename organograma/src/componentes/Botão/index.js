import './Botão.css'

const Botão = (props) => {
    return (
        <button>
            {props.children}
        </button>
    )
}

export default Botão