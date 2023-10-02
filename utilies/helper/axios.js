const axios = require('axios');
const { errorMassge } = require('../constant');
require('dotenv').config()
const BLOG_URL = process.env.BLOG_URL
const BLOG_TOKEN = process.env.BLOG_TOKEN


const axiosIntance = axios.create({
  baseURL: BLOG_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'x-hasura-admin-secret': BLOG_TOKEN || "",
  },
});


axiosIntance.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    console.log('backend error', error);
    const status = error.response ? error.response.status : 500;

     if(errorMassge[status])
      return Promise.reject(errorMassge[status]);

    return Promise.reject(error);
  }
);

module.exports = axiosIntance;