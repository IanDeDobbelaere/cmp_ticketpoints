import axios from 'axios';


export const FETCH_SALE_POINTS = 'fetch_sale_points';

const ROOT_URL = 'https://www.delijn.be/rise-api-core/locations/verkooppunten/'


export function fetchSalePoints() {
  const request = axios.get(`${ROOT_URL}Schoten`);

  return {
    type: FETCH_SALE_POINTS,
    payload: request
  };
}
