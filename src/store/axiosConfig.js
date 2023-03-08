import axios from "axios";
import decode from "jwt-decode";
import { PASSPORT_KEY } from "../lib/config";
import { getAPI_Endpoint } from "../lib/config";

export const axiosPublicQuery = axios.create({
  baseURL: getAPI_Endpoint(),
});

export const axiosPrivateQuery = axios.create({
  baseURL: getAPI_Endpoint(),
  withCredentials: true,
});

const refresh = axios.create({
  baseURL: `${getAPI_Endpoint()}/authentication/refresh`,
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
      token && localStorage.setItem(PASSPORT_KEY, JSON.stringify(token));
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
