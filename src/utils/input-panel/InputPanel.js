import React from 'react';
import './InputPanel.css';
import {connect} from "react-redux";
import {InputCoordinates} from "./InputCoordinates";
import {UPDATE_WALLS} from "../../constants";

// InputPanel - get user data
function InputPanel(props) {
  const {updateWalls, walls} = props;

  const handleUpdate = (idx, name, value) => {
    if (name==="pos" && isNaN(value*1)) {
      return false;
    }
    let data = [...walls];
    data[idx][name] = value;
    updateWalls(data);
  }

  return <>
    <div>
      <InputCoordinates title={'Bottom wall (xy)'} title_input={'z-coordinate'} idx={0} value={walls}
                        handleUpdate={handleUpdate}/>
    </div>

    <div>
      <div className={"input-box"}><InputCoordinates title={'Side wall (xz1)'} title_input={'y-coordinate'}
                                                     idx={2} value={walls} handleUpdate={handleUpdate}/></div>
      <div className={"input-box"}><InputCoordinates title={'Side wall (xz2)'} title_input={'y-coordinate'}
                                                     idx={3} value={walls} handleUpdate={handleUpdate}/></div>
      <div className={"clear"}/>
    </div>

    <div>
      <div className={"input-box"}><InputCoordinates title={'Side wall (yz1)'} title_input={'x-coordinate'}
                                                     idx={4} value={walls} handleUpdate={handleUpdate}/></div>
      <div className={"input-box"}><InputCoordinates title={'Side wall (yz2)'} title_input={'x-coordinate'}
                                                     idx={5} value={walls} handleUpdate={handleUpdate}/></div>
      <div className={"clear"}/>
    </div>

    <InputCoordinates title={'Interface (xy)'} title_input={'z-coordinate'} idx={1} value={walls}
                      handleUpdate={handleUpdate}/>
  </>
}

const mapStateToProps = (state) => ({
  walls: state.walls.list
});

const mapDispatchToProps = (dispatch) => {
  return {
    updateWalls(list) {
      return dispatch({type: UPDATE_WALLS, list});
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(InputPanel);
