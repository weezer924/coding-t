import React from "react";
import usePersist from "../utilities/Persist";

import AddTodoForm from "./AddTodoForm";
import Item from "./Item";


function TodoPage() {
  const [todo, setTodo] = usePersist("todo", []);

  const setRandomKey = () => Math.random().toString(32).substring(2);

  const handleAddTodo = (message) => {
    const data = {
      key: setRandomKey(),
      message: message,
      selected: false,
    }
    todo.unshift(data);
    setTodo(todo.concat());
  };

  const handleCheck = value => {
    const newTodo = todo.map(todo => {
      if (todo.key === value.key) {
        todo.selected = !value.selected;
      }
      return todo;
    });
    setTodo(newTodo);
  };

  const handleDeleteItem = value => {
    todo.splice(value - 1, 1)
    setTodo(todo.concat());
  };

  const handleDeleteItemSeleted = () => {
    setTodo(todo.filter(todo => !todo.selected));
  };

  const handleDeleteItemAll = () => {
    setTodo([]);
  };

  let data = todo.map((value, key) =>
    <Item key={value.key} value={value} index={key + 1} onCheck={handleCheck} onDelItem={handleDeleteItem} />
  );
  
  return (
    <div>
      <div className="alert alert-primary">
        <AddTodoForm onAddTodo={handleAddTodo} />
      </div>
      <div className="alert alert-secondary">
        <button type="button" className="btn btn-warning btn-sm col-2" onClick={handleDeleteItemSeleted}>選択中のアイテム削除</button>
        <button type="button" className="btn btn-danger btn-sm col-2" onClick={handleDeleteItemAll}>全削除</button>
      </div>
      <table className="table mt-4">
        <tbody>{data}</tbody>
      </table>
    </div>
  )
}

export default TodoPage