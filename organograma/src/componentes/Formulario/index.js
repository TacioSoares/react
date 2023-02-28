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

    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite so endereço da imagem" />
                <ListaSuspensa itens={times} label="Time"/>
                <Botão>
                    Criar card 
                </Botão>
            </form>
        </section>
    )
}

export default Formulario