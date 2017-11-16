import axios from 'axios';


export const FETCH_SELL_POINTS = 'fetch_SELL_points';

const ROOT_URL = 'https://www.delijn.be/rise-api-core/locations/verkooppunten'


export function fetchSellPoints() {
  const request = axios.get(`${ROOT_URL}/Schoten`);

  return {
    type: FETCH_SELL_POINTS,
    payload: request
  };
}
