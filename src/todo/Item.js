import React from "react";

function Item(props) {
  const { value, onCheck } = props;

  const handleChange = () => {
    onCheck(value);
  }

  return(
    <tr>
      <th>No.{props.index}</th>
      <td>
        <input
          type="checkbox"
          checked={value.done}
          onChange={handleChange}
        />
      </td>
      <td>{props.value.message}</td>
    </tr>
  )
}

export default Item