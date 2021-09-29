import {UPDATE_WALLS} from "../constants";

const initialState = {
  list: [
    {type: 0, pos: null, show: true, color: 'green'},
    {type: 0, pos: null, show: true, color: 'blue'},
    {type: 1, pos: null, show: true, color: 'green'},
    {type: 1, pos: null, show: true, color: 'blue'},
    {type: 2, pos: null, show: true, color: 'green'},
    {type: 2, pos: null, show: true, color: 'blue'},
  ]
};

export default function walls(state = initialState, action) {
  switch (action.type) {
    case UPDATE_WALLS:
      console.log(action.list);
      return {
        ...state,
        list: action.list
      };
    default:
      return state;
  }
}
