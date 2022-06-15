import { useEffect, useState } from 'react';

const now = new Date();
const day = ("0" + now.getDate()).slice(-2);
const month = ("0" + (now.getMonth() + 1)).slice(-2);
const year = now.getFullYear();
const today = year + "-" + month + "-" + day;

const corPadrao = "#FFFFFF";

const Form = ({ salvarEdicaoPessoa, cancelarEdicao, adicionarPessoa, editarPessoa }) => {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [dataNascimento, setDataNascimento] = useState(today);
    const [corFavorita, setCorFavorita] = useState(corPadrao);

    const [editando, setEditando] = useState(false);

    const limparCampos = () => {
        setNome("");
        setSobrenome("");
        setDataNascimento(today);
        setCorFavorita(corPadrao);
    }

    useEffect(() => {
        if (editarPessoa.index >= 0) {
            setEditando(true);

            setNome(editarPessoa.pessoa.nome);
            setSobrenome(editarPessoa.pessoa.sobrenome);
            setDataNascimento(editarPessoa.pessoa.dataNascimento);
            setCorFavorita(editarPessoa.pessoa.corFavorita);
        } else {
            setEditando(false);
            limparCampos();
        }
    }, [editarPessoa]);

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
    const montarObjetoPessoa = () => {
        const pessoa = { nome, sobrenome, dataNascimento, corFavorita };
        return pessoa;
    }

    const clicarAdicionar = () => {
        const pessoa = montarObjetoPessoa();
        adicionarPessoa(pessoa);
        limparCampos();
    }

    const verificarEdicao = (verificarEdicao = false) => {
        return verificarEdicao === editando;
    }

    const clicarEditar = () => {
        const pessoa = montarObjetoPessoa();
        salvarEdicaoPessoa(editarPessoa.index, pessoa);
    }

    return (
        <div>
            <input id="nome" placeholder="Nome" value={nome} onChange={handleNome} />
            <br />
            <input id="sobrenome" placeholder="Sobrenome" value={sobrenome} onChange={handleSobrenome} />
            <br />
            <input id="dataNascimento" type="date" data-date="" data-date-format="DD MMMM YYYY" value={dataNascimento} onChange={handleDataNascimento} />
            <br />
            <input id="corFavorita" type={"color"} value={corFavorita} onChange={handleCorFavorita} />
            <br />
            {verificarEdicao(false) &&
                <button onClick={clicarAdicionar}>Adicionar</button>
            }
            {verificarEdicao(true) &&
                <>
                    <button onClick={cancelarEdicao}>Cancelar</button>
                    <button onClick={clicarEditar}>Editar</button>
                </>
            }
        </div>
    )
}

export default Form;