import React, { useState } from "react";

function AddTodoForm (props) {
  const [text, setTodoText] = useState('');

  const doChange = (e) => {
    setTodoText(e.target.value);
  }

  const doAction = (e) => {
    props.onAddTodo(text);
    setTodoText('');
    e.preventDefault();
  }

  return (
    <form onSubmit={doAction} action="">
      <div className="form-group row">
        <input type="text" className="form-control-sm col" onChange={doChange} value={text} required />
        <input type="submit" value="追加" className="btn btn-primary btn-sm col-2" />
      </div>
    </form>
  )
}

export default AddTodoForm