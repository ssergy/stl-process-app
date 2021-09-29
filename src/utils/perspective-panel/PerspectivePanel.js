import React from 'react';
import './PerspectivePanel.css';

export const PerspectivePanel = (props) => {
  return <div className={"perspective-panel"}>
    <div>
      <select onChange={props.handleSetUpVal}>
        <option value={0}>XY</option>
        <option value={1}>XZ</option>
        <option value={2}>YZ</option>
      </select>
    </div>
  </div>;
}
