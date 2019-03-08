import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import PersonenListe from './components/PersonenListe';

const App = () => {
  const [personen, setPersonen] = useState();

  const [errorMessage, setErrorMessage] = useState();
  const [name, setName] = useState();
  const [alter, setAlter] = useState();

  const namen = [{name: 'Hans', alter: 123}, {name: 'Peter', alter: 44}];
  const name = 'safa';
  namen
  namen.

  namen[1].alter;

// hallo test 

  const obj = {name: 'Hans', alter: 123}
  obj.alte


  const addPerson = () => {
    if (name && alter) {
      console.log('funktion');

      let persons;
      let newPersonen = {name: name, alter: alter};

      if (personen) {
        persons = [...personen, {name: name, alter: alter}];
      } else {
        persons = [newPersonen];
      }
      
      setPersonen(persons);
      console.log(personen);
      setErrorMessage();
    } else {
      setErrorMessage('Name oder Alter fehlt');
    }

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <span>Wir lernen</span>
        { errorMessage ? <span>{errorMessage}</span> : ''
        }
        <input type="text" value={name} placeholder="Name" onChange={event => setName(event.target.value)}></input>
        <input type="text" value={alter} placeholder="Alter" onChange={event => setAlter(event.target.value)}></input>
        <button onClick={addPerson}>Hinzufügen</button>
        <PersonenListe personen={personen} />
      </header>
    </div>
  );

}

export default App;
