import { combineReducers } from 'redux';
import SellPointsReducer from './reducer_sellpoints';

const rootReducer = combineReducers({
  Sellpoints: SellPointsReducer

});

export default rootReducer;
