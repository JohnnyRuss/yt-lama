export const PASSPORT_KEY: string = "yt_passport";

const ENDPOINT_DEV = process.env.REACT_APP_ENDPOINT_DEV;
const ENDPOINT_PROD = process.env.REACT_APP_ENDPOINT_PROD;
const NODE_MODE = process.env.REACT_APP_NODE_MODE;

export function getAPI_Endpoint() {
  return NODE_MODE === "DEV" ? ENDPOINT_DEV : ENDPOINT_PROD;
}
