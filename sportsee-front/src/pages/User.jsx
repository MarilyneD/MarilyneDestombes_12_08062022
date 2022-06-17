import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ActivityChart from "../components/ActivityChart";
import AverageSessionsChart from "../components/AverageSessionsChart";
import PerformanceChart from "../components/PerformanceChart";
import ScoreChart from "../components/ScoreChart";
import SideCards from "../components/SideCards";

const User = () => {
  let { id } = useParams();
  let navigate = useNavigate();

  const [mainData, setMainData] = useState([]);
  const [activity, setActivity] = useState([]);
  const [averagesessions, setAvergagesessions] = useState([]);
  const [performance, setPerformance] = useState([]);
  const userList = [12,18]

  async function getMainData() {
    const response = await axios.get("http://localhost:3000/user/" + id);
    return setMainData(response.data.data);
  }
  useEffect(() => {
    getMainData();
  }, []);

  async function getActivity() {
    const response = await axios.get(
      "http://localhost:3000/user/" + id + "/activity"
    );
    return setActivity(response.data.data.sessions);
  }
  useEffect(() => {
    getActivity();
  }, []);

  async function getSessions() {
    const response = await axios.get(
      "http://localhost:3000/user/" + id + "/average-sessions"
    );
    return setAvergagesessions(response.data.data.sessions);
  }
  useEffect(() => {
    getSessions();
  }, []);

  async function getPerformance() {
    const response = await axios.get(
      "http://localhost:3000/user/" + id + "/performance"
    );
    return setPerformance(response.data.data);
  }
  useEffect(() => {
    getPerformance();
  }, []);

  useEffect(() => {
    console.log("mainData", mainData);
    console.log("sessions", averagesessions);
    console.log("Activity", activity);
    console.log("Performance", performance);
  }, []);

  useEffect(() => {
    if (userList.includes(id)) {
      navigate("/Notfound");
    }
  }, []);

  if (
    mainData.length === 0 ||
    averagesessions.length === 0 ||
    activity.length === 0 ||
    performance.length === 0
  ) {
    return <p>Chargement des data...</p>;
  }
  return (
    <div className="user-container">
      <div className="hello"> Bonjour <div className="hello-red">{mainData.userInfos.firstName}</div></div>
      <div className="message"> Félicitation ! Vous avez explosé vos objectifs hier 👏 </div>
      <div className="charts-container">
        <ActivityChart activity={activity} />
        <AverageSessionsChart averagesessions={averagesessions} />
        <PerformanceChart performance={performance} />
        <ScoreChart maindata={mainData} />
        <SideCards keydata={mainData.keyData}/>
      </div>
    </div>
  );
};

export default User;