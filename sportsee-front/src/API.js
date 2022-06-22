import axios from "axios";

async function getMainData(url, id) {
  const response = await axios.get(url + id);
  return response.data.data;
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
