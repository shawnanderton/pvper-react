
import axios from 'axios';
import { isExpired } from '../helpers/utils';


  const BNET_ID = process.env.BLIZZARD_CLIENT_ID;
  const BNET_SECRET = process.env.BLIZZARD_CLIENT_SECRET;
  let auth = null;

  function get() {
    if(auth) return auth.access_token;


   throw new Error('Please set OAuth Token');
}

  async function set() {
  try {
   const response = await axios({
    method: 'post',
    url: 'https://us.battle.net/oauth/token',
    data: `grant_type=client_credentials&client_id=${BNET_ID}&client_secret=${BNET_SECRET}`
  });
   auth = response.data;

  } catch (error) {
    console.log(error);
    throw new Error(`Problem getting the OAuth token from the Blizzard API.  
                        Please check that your Client ID and Secret are correct.`);
  }
 }

 const blizzardAuthToken = {
  get,
  set
};

export default blizzardAuthToken;