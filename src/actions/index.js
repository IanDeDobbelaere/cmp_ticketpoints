import axios from 'axios';


export const FETCH_SELL_POINTS = 'fetch_sell_points';
export const FETCH_SELL_POINT = 'fetch_sell_point';

const ROOT_URL = 'https://www.delijn.be/rise-api-core/locations/verkooppunten'


export function fetchSellPoints() {
  const request = axios.get(`${ROOT_URL}/Schoten`);

  return {
    type: FETCH_SELL_POINTS,
    payload: request
  };
}

export function fetchSellPoint(primaryKey) {
  const request = axios.get(`${ROOT_URL}/Schoten/${primaryKey}`);

  return {
    type: FETCH_SELL_POINT,
    payload: request
  };
}
