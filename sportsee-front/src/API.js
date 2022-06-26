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

async function getMainData(url, id) {
  var erroringet = false;
  const response = await axios.get(url + id).catch(function (error) {
    if (error.response) {
      console.log("error.response.data", error.response.data);
      erroringet = true;
    }
  });
  if (erroringet) {
    console.log("il y a une erreur");
    return axios
      .get("/mocked-data/getMainData.json")
      .then((res) => console.log("res.data du mocked", res.data));
  } else {
    return response.data.data;
  }
}

async function getActivity(url, id) {
  const response = await axios.get(url + id + "/activity");
  return response.data.data.sessions;
}

async function getSessions(url, id) {
  const response = await axios.get(url + id + "/average-sessions");
  return response.data.data.sessions;
}

async function getPerformance(url, id) {
  const response = await axios.get(url + id + "/performance");
  return response.data.data;
}

export { getMainData, getActivity, getSessions, getPerformance };
