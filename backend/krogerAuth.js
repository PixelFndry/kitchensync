const axios = require('axios');

const CLIENT_ID = 'kitchensync-458ec59f77e9abee8b6856d5ef29e6095740913722645073281';
const CLIENT_SECRET = 'QC-EN9qWhnFYAd-NkBekwpVbKdgoAPzaNGdIrjEX';
const REDIRECT_URI = 'http://localhost:3000/callback';

async function getAccessToken(code) {
  try {
    const response = await axios.post('https://api.kroger.com/v1/connect/oauth2/token', {
      grant_type: 'authorization_code',
      code,
      redirect_uri: REDIRECT_URI,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET
    });
    return response.data.access_token;
  } catch (error) {
    console.error('Error getting access token:', error);
    throw error;
  }
}

async function addToCart(accessToken, productId, quantity) {
  try {
    const response = await axios.post('https://api.kroger.com/v1/cart/add', {
      items: [{ productId, quantity }]
    }, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error adding item to cart:', error);
    throw error;
  }
}

async function fetchUserProfile(accessToken) {
  try {
    const response = await axios.get('https://api.kroger.com/v1/identity/profile', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching profile:', error);
    throw error;
  }
}

module.exports = {
  getAccessToken,
  addToCart,
  fetchUserProfile
};
