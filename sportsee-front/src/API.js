import axios from "axios";
/**
 * a react hook that allows you to fetch data
 * @param {(url:string, id:string)} 
 * url is a string that contains the URL of data service (backend).
 * id is a string that contains the identity number of the user.
 * @return {(isLoading:boolean, data:object, error:boolean|object)} 
    returns a boolean indicating if the data loading is completed or not, 
    a boolean indicating whether an error occurred during the fetching 
    and an object that contain the data.
 *
 */

async function getMainData(url, id, isMocked) {
  const response = await axios.get(url + id).catch(function (error) {
    if (error.response) {
      console.log("error.response.data", error.response.data);
    }
  });
  if (isMocked) {
    return axios.get("/mocked-data/getMainData.json").then((res) => res.data);
  } else {
    return response.data.data;
  }
}

async function getActivity(url, id, isMocked) {
  const response = await axios.get(url + id + "/activity");

  if (isMocked) {
    return axios.get("/mocked-data/getActivity.json").then((res) => res.data);
  } else {
    return response.data.data.sessions;
  }
}

async function getSessions(url, id, isMocked) {
  const response = await axios.get(url + id + "/average-sessions");
  if (isMocked) {
    return axios.get("/mocked-data/getSessions.json").then((res) => res.data);
  } else {
    return response.data.data.sessions;
  }
}

async function getPerformance(url, id, isMocked) {
  const response = await axios.get(url + id + "/performance");
  if (isMocked) {
    return axios
      .get("/mocked-data/getPerformance.json")
      .then((res) => res.data);
  } else {
    return response.data.data;
  }
}

export { getMainData, getActivity, getSessions, getPerformance };
