import React, {useState} from 'react';
import data from './services/mock.json';
import './App.css';
import Card from './Card.js';
import Logo from './Logo.js';
import Form from './Form.js';

function loadJsonData() {
  return data
}

const FormInitValues = {
  user: '',
  label: '',
  amount: '',
  action: '',
  debit: false,
  credit: true
};


function App() {

  const [showForm, setShowFormValue] = useState(false);
  let [values, setValues] = useState(FormInitValues);
  const elements = loadJsonData();


  function handleValueChange(e) {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    setValues({ ...values, [e.target.name]: value })
  }

  const handleFormView = (e) => setShowFormValue(!showForm);
  const items = [];

  values = elements.data;

  values.map((v, i) => {
    items.push(<ul>
      <Card user={v.user} label={v.label} action={v.action} amount={v.amount}/>
    </ul>)
  });

  return (
      <div className="App">
        <Logo/>
        {!showForm &&
        <ul>
          {items}
        </ul>
        }

        {showForm &&
        <Form handleValueChange={handleValueChange} />
        }

        <button onClick={handleFormView}>Ajouter une dépense</button>
      </div>
  );
}

export default App;
