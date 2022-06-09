import { useState } from 'react';

const now = new Date();
const day = ("0" + now.getDate()).slice(-2);
const month = ("0" + (now.getMonth() + 1)).slice(-2);
const year = now.getFullYear();
const today = year + "-" + month + "-" + day;

const Form = ({adicionarPessoa}) => {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [dataNascimento, setDataNascimento] = useState(today);
    const [corFavorita, setCorFavorita] = useState("#FFFFFF");

    const handleNome = (event) => {
        setNome(event.target.value);
    }
    const handleSobrenome = (event) => {
        setSobrenome(event.target.value);
    }
    const handleDataNascimento = (event) => {
        setDataNascimento(event.target.value);
    }
    const handleCorFavorita = (event) => {
        setCorFavorita(event.target.value);
    }
    const montarObjetoPessoa = ()=>{
        const pessoa = {nome, sobrenome, dataNascimento, corFavorita};
        adicionarPessoa(pessoa);
    }
    return (
        <div>
            <input placeholder="Nome" value={nome} onChange={handleNome} />
            <br />
            <input placeholder="Sobrenome" value={sobrenome} onChange={handleSobrenome} />
            <br />
            <input type="date" data-date="" data-date-format="DD MMMM YYYY" value={dataNascimento} onChange={handleDataNascimento} />
            <br />
            <input type={"color"} value={corFavorita} onChange={handleCorFavorita} />
            <br />
            <button onClick={montarObjetoPessoa}>Adicionar</button>
        </div>
    )
}

export default Form;