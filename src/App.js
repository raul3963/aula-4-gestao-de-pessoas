import { useState } from 'react';
import './App.css';
import Form from './components/Form'
import ItemLista from './components/ItemLista';

const indexEdicaoPessoasPadrao = undefined;

function App() {
  const [listaPessoas, setlistaPessoas] = useState([]);
  const [indexEdicaoPessoas, setIndexEdicaoPessoas] = useState(indexEdicaoPessoasPadrao);

  const selecionarEdicaoPessoa = (index) => {
    setIndexEdicaoPessoas(index);
  }

  const adicionarPessoa = (pessoa) => {
    listaPessoas.push(pessoa);
    setlistaPessoas([...listaPessoas]);

    setIndexEdicaoPessoas(indexEdicaoPessoasPadrao);
  }
  
  
  const cancelarEdicao = () => {
    setIndexEdicaoPessoas(indexEdicaoPessoasPadrao);
  }

  const salvarEdicaoPessoa = (index, pessoa) => {
    listaPessoas[index] = pessoa;
    cancelarEdicao();
  }

  const removerPessoa = (index) => {
    listaPessoas.splice(index, 1);
    setlistaPessoas([...listaPessoas]);
  }

  return (
    <div className="App">
      <h3>Cadastrar</h3>
      <Form salvarEdicaoPessoa={salvarEdicaoPessoa} cancelarEdicao={cancelarEdicao} adicionarPessoa={adicionarPessoa} editarPessoa={{index: indexEdicaoPessoas, pessoa: listaPessoas[indexEdicaoPessoas]}}/>
      <div id="listaPessoas">
          <h3>Lista de Pessoas Cadastradas</h3>
          {
            listaPessoas.map((item, index) => <ItemLista selecionarEdicaoPessoa={selecionarEdicaoPessoa} removerPessoa={removerPessoa} item={item} key={index} index={index}></ItemLista>)
          }
      </div>
    </div>
  );
}

export default App;
