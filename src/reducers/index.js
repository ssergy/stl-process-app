import {combineReducers} from 'redux';
import walls from './walls';

const AppReducer = combineReducers({
    walls,
});

export default AppReducer
