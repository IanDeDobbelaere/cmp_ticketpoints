import _ from 'lodash';
import { FETCH_SELL_POINTS } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
  case FETCH_SELL_POINTS:
      return _.mapKeys(action.payload.data,'primaryKey');
    default:
      return state;
  }
}
