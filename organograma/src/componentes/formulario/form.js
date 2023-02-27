import './form.css'

const Formulario = () => {
    return (
        <form id="formulario" >
            <h1>
                Preencha os dados para criar o card do colaborador
            </h1>
            <label for="nome" >Nome</label><input required placeholder="Digite seu nome"type="text" id="nome" className='input-text'></input>
            <label for="cargo" >Cargo</label><input required placeholder="Digite seu cargo" type="text" id="cargo" className='input-text'></input>
            <label for="imagem" >Imagem</label><input required placeholder="Informe o endereço da imagem" type="text" id="imagem" className='input-text'></input>
            <label for="time" >Time</label><input required  type="text" id="time"  className='input-text'></input>
            <input type="submit" id="submit" value="Criar card"></input>
        </form>
    )
}


export default Formulario