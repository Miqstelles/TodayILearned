import './App.css';
import { useState } from 'react';

function App() {
  const [pessoa, setPessoa] = useState({
    nome: 'Niki de Saint Phalle',
    arte: {
      titulo: 'Blue Nana',
      cidade: 'Hamburg',
      imagem: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
  });

  function handleNameChange(e) {
    setPessoa({
      ...pessoa,
      nome: e.target.value
    });
  }

  function handleTitleChange(e) {
    setPessoa({
      ...pessoa,
      arte: {
        ...pessoa.arte,
        titulo: e.target.value
      }
    });
  }

  function handleCityChange(e) {
    setPessoa({
      ...pessoa,
      arte: {
        ...pessoa.arte,
        cidade: e.target.value
      }
    });
  }

  function handleImageChange(e) {
    setPessoa({
      ...pessoa,
      arte: {
        ...pessoa.arte,
        imagem: e.target.value
      }
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <label>
          Nome:
          <input
            value={pessoa.nome}
            onChange={handleNameChange}
          />
        </label>
        <label>
          Titulo:
          <input
            value={pessoa.arte.titulo}
            onChange={handleTitleChange}
          />
        </label>
        <label>
          Cidade:
          <input
            value={pessoa.arte.cidade}
            onChange={handleCityChange}
          />
        </label>
        <label>
          Imagem:
          <input
            value={pessoa.arte.imagem}
            onChange={handleImageChange}
          />
        </label>
        <p>
          <i>{pessoa.arte.titulo}</i>
          {' por '}
          {pessoa.nome}
          <br />
          (localizado em {pessoa.arte.cidade})
        </p>
        <img
          src={pessoa.arte.imagem}
          alt={pessoa.arte.titulo}
          width={'800px'}
        />
      </header>
    </div>
  );
}

export default App;
