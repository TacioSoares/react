import Botão from '../Botão'
import CampoTexto from '../CampoTexto/campoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './formulario.css'

const Formulario = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Form foi submetido')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio="true" label="Nome" placeholder="Digite seu nome" />
                <CampoTexto obrigatorio="true" label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite so endereço da imagem" />
                <ListaSuspensa obrigatorio="true" itens={times} label="Time"/>
                <Botão>
                    Criar card 
                </Botão>
            </form>
        </section>
    )
}

export default Formulario