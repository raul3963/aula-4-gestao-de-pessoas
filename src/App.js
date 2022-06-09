import { useState } from 'react';
import './App.css';
import Form from './components/Form'

function App() {
  const [listaPessoas, setlistaPessoas] = useState([]);

  const adicionarPessoa = (pessoa) => {
    listaPessoas.push(pessoa)
    console.log(pessoa)
    setlistaPessoas([...listaPessoas])
  }
  return (
    <div className="App">
      <h3>Cadastrar</h3>
      <Form adicionarPessoa={adicionarPessoa}/>
      <div id="listaPessoas">
        <h3>Lista de Pessoas Cadastradas</h3>

      </div>
    </div>
  );
}

export default App;
