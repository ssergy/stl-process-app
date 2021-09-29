import React from "react";

export const InputCoordinates = (props) => {
  const {title, title_input, idx, handleUpdate} = props;
  let value = props.value[idx];

  return <div className={"wrapper"}>
    <div>{title}: {title_input}</div>
    <div>
      <input type={'text'} name={'pos'} value={value.pos ? value.pos : ''}
             onChange={(e) => handleUpdate(idx, e.target.name, e.target.value)}/>
      <input type={"checkbox"} checked={value.show} name={'show'}
             onChange={(e) => handleUpdate(idx, e.target.name, e.target.checked)}/>
    </div>
  </div>;
}
