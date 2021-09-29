import React from 'react';
import './Panel.css';
import InputPanel from "../input-panel/InputPanel";

export const Panel = (props) => {
  return <div className={"panel"}>
    <div className={"panel-box"}>
      <form>
        Upload stl model:&nbsp;
        <input type="file"
               onChange={(event) => props.handleFileLoad(event)}
               onClick={(event) => {
                 event.target.value = null
               }}
        />
      </form>
    </div>
    <div className={"panel-box"}>
      <InputPanel {...props} />
    </div>
  </div>;
}


