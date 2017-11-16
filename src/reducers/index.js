import { combineReducers } from 'redux';
import SalePointsReducer from './reducer_salepoints';

const rootReducer = combineReducers({
  Salepoints: SalePointsReducer

});

export default rootReducer;
