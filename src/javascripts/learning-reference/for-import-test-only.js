/*  eslint  no-unused-vars: 0 no-console: 0*/
import { okGame } from './sportMessager';
okGame('Football');

import { getAPIDataAsJsObjects } from '../utils/api-data-fetcher';
async function init() {
  const countryArray = await getAPIDataAsJsObjects(API_URL);
  //console.log(countryArray);
}
