import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://opendata.cwb.gov.tw/api',
  headers: {
    accept: 'application/json',
  },
});

export const getWeather = (params) => instance.get('/v1/rest/datastore/F-C0032-001', { params });
