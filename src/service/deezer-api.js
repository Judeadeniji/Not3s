import { Data } from "brace-js";
export const Result = Data({});

const proxyUrl = 'https://corsproxy.io/?';
const apiUrl = `https://api.deezer.com/`;

const getDataFromServer = (params) => {
  return async () => {
    
    const response = await fetch(proxyUrl + apiUrl + params);
    const data = await response.json();
    
    // we return another function that returns the api response
    return () => {
      console.log(data)
      Result.value = {...Result.value, [params]: {...data}}
    }
  }
}

export const DeezerApi = getDataFromServer