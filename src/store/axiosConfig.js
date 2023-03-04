import axios from "axios";
import decode from "jwt-decode";
import { PASSPORT_KEY } from "../lib/config";

export const axiosPublicQuery = axios.create({
  baseURL: "http://localhost:4001/api/v1",
});

export const axiosPrivateQuery = axios.create({
  baseURL: "http://localhost:4001/api/v1",
  withCredentials: true,
});

const refresh = axios.create({
  baseURL: "http://localhost:4001/api/v1/authentication/refresh",
  withCredentials: true,
  method: "POST",
});

axiosPrivateQuery.interceptors.request.use(async (config) =>
  tokenExchange(config)
);

let exchangePromise;

function tokenExchange(config) {
  const token = getJWT();

  const decodedToken = token ? decode(token) : null;
  const exp = decodedToken?.exp;

  if (Math.floor(Date.now() / 1000) > exp) {
    if (!exchangePromise)
      exchangePromise = refresh()
        .then(({ data }) => {
          exchangePromise = null;
          return data.accessToken;
        })
        .catch((err) => {
          // if (err.response.status === 401)
          //   localStorage.removeItem(PASSPORT_KEY);
          exchangePromise = null;
          return "";
        });

    exchangePromise.then((token) => {
      localStorage.setItem(PASSPORT_KEY, token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    });
  } else {
    config.headers.authorization = `Bearer ${token}`;
    return config;
  }
}

function getJWT() {
  return localStorage.getItem(PASSPORT_KEY)
    ? JSON.parse(localStorage.getItem(PASSPORT_KEY))
    : null;
}
