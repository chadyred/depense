import React from 'react';
import './App.css';


function Form(props) {


  return (
      <div className="Form">
        <form>
          <div>
            <input name="user" onChange={props.handleValueChange} />
          </div>
          <div>
            <input name="label" onChange={props.handleValueChange} />
          </div>
          <div>
            <input name="amount" type="integer" onChange={props.handleValueChange} />
          </div>
          <div>
            <input name="action" onChange={props.handleValueChange} />
          </div>
        </form>
      </div>
  );
}

export default Form;
