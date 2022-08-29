import React from "react";

function Item(props) {
  const { value, onCheck, onDelItem } = props;

  const handleChange = () => {
    onCheck(value);
  }

  const handleDelItem = () => {
    onDelItem(value);
  }

  return(
    <tr>
      <th>No.{props.index}</th>
      <td>
        <input
          type="checkbox"
          checked={value.selected}
          onChange={handleChange}
        />
      </td>
      <td>{props.value.message}</td>
      <td><button onClick={handleDelItem} className="btn btn-warning btn-sm">削除</button></td>
    </tr>
  )
}

export default Item