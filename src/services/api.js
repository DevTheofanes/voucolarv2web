import axios from "axios";

export const api = axios.create({
  // baseURL: "http://127.0.0.1:3333",
  baseURL: "https://server.voucolar.com.br:8002",
});

const GOOGLE_FONTS_API_URL = 'https://www.googleapis.com/webfonts/v1/webfonts';
const GOOGLE_FONTS_API_KEY = 'AIzaSyC_ypliEtmLV7ARHLG4N2nwGuwximJYkRw';

export const googleAPI = axios.create({
  baseURL: GOOGLE_FONTS_API_URL,
  params: {
    key: GOOGLE_FONTS_API_KEY,
  },
});

export default api;

