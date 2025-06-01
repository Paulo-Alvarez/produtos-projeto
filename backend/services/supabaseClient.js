const axios = require('axios');
const https = require('https');
require('dotenv').config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const httpsAgent = new https.Agent({  
  rejectUnauthorized: false,
});

const supabase = axios.create({
  baseURL: `${supabaseUrl}/rest/v1`,
  headers: {
    apikey: supabaseKey,
    Authorization: `Bearer ${supabaseKey}`,
    'Content-Type': 'application/json',
    Prefer: 'return=representation',
  },
  httpsAgent,
});

module.exports = supabase;