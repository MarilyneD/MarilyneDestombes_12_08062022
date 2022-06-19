import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMainData, getActivity, getSessions, getPerformance } from "../API.js";
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
  const [averageSessions, setAverageSessions] = useState([]);
  const [performance, setPerformance] = useState([]);
  const userList = ['12','18']

 
  useEffect(() => {
    if (!userList.includes(id)) {
      navigate("/Notfound");
    }
  }, []);


  useEffect(() => {
     (async () => {
       const responseMainData = await getMainData(id);
       const responseActivity = await getActivity(id);
       const responseSessions = await getSessions(id);
       const responsePerformance = await getPerformance(id);
       
       setMainData(responseMainData);
       setActivity(responseActivity);
       setAverageSessions(responseSessions);
       setPerformance(responsePerformance);
     })();
   }, []);
  

  // async function getActivity() {
  //   const response = await axios.get(
  //     "http://localhost:3000/user/" + id + "/activity"
  //   );
  //   return setActivity(response.data.data.sessions);
  // }
  // useEffect(() => {
  //   getActivity();
  // }, []);


  useEffect(() => {
    console.log("mainData", mainData);
    console.log("sessions", averageSessions);
    console.log("Activity", activity);
    console.log("Performance", performance);
  }, []);


  if (
    mainData.length === 0 ||
    averageSessions.length === 0 ||
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
        <AverageSessionsChart averagesessions={averageSessions} />
        <PerformanceChart performance={performance} />
        <ScoreChart maindata={mainData} />
        <SideCards keydata={mainData.keyData}/>
      </div>
    </div>
  );
};

export default User;