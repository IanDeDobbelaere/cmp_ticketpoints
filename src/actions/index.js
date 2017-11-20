import axios from 'axios';


export const FETCH_SELL_POINTS = 'fetch_sell_points';

const ROOT_URL = 'https://www.delijn.be/rise-api-core/locations/verkooppunten'


export function fetchSellPoints(gemeente) {
  const request = axios.get(`${ROOT_URL}/${gemeente}`);

  return {
    type: FETCH_SELL_POINTS,
    payload: request
  };
}
