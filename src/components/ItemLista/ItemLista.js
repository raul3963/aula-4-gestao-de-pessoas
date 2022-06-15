import './ItemLista.css';

const ItemLista = ({ selecionarEdicaoPessoa, removerPessoa, item, index }) => {

    const nome = item.nome
    const sobrenome = item.sobrenome
    const dataNascimento = item.dataNascimento
    const corFavorita = item.corFavorita

    console.log(nome, sobrenome, dataNascimento, corFavorita)

    const selecionarPessoa = () => {
        selecionarEdicaoPessoa(index)
    }

    return (
        <div className='baseItem'>
            <div className="itemPessoa" style={{ borderColor: corFavorita, backgroundColor: corFavorita + "25" }}>
                <button onClick={selecionarPessoa} >Editar</button>
                <span className="nomeCompletoPessoa">{nome + " " + sobrenome}</span>
                <span className="dataNascPessoa">{dataNascimento}</span>
                <button onClick={removerPessoa}> Remover </button>
            </div>
        </div>
    )
}

export default ItemLista;