import axios from "axios";

async function getMainData(id) {
  const response = await axios.get("http://localhost:3000/user/" + id);
  return response.data.data;
}

async function getActivity(id) {
  const response = await axios.get(
    "http://localhost:3000/user/" + id + "/activity"
  );
  return response.data.data.sessions;
}

async function getSessions(id) {
  const response = await axios.get(
    "http://localhost:3000/user/" + id + "/average-sessions"
  );
  return response.data.data.sessions;
}

async function getPerformance(id) {
  const response = await axios.get(
    "http://localhost:3000/user/" + id + "/performance"
  );
  return response.data.data;
}

export { getMainData, getActivity, getSessions, getPerformance };
