import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {getMainData,getActivity,getSessions,getPerformance } from "../API.js";
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
  const userList = ["12", "18"];
 




  useEffect(() => {
    if (!userList.includes(id)) {
      navigate("/Notfound");
    }
  }, []);


  

  useEffect(() => {
    (async () => {
      const url="http://localhost:3000/user/";
      const isMocked = false;
      const responseMainData = await getMainData(url,id,isMocked);
      const responseActivity = await getActivity(url,id,isMocked);
      const responseSessions = await getSessions(url,id,isMocked);
      const responsePerformance = await getPerformance(url,id,isMocked);

      setMainData(responseMainData);
      console.log("responseMainData",responseMainData);
      setActivity(responseActivity);
      console.log("responseActivity",responseActivity);
      setAverageSessions(responseSessions);
      console.log("responseSessions",responseSessions);
      setPerformance(responsePerformance);
      console.log("responsePerformance",responsePerformance);
    })();
  }, []);

  

  function formatDataForRecharts() {
    // Activity : data match perfectly, no need to modify
    // Sessions : days key from numbers to letters 1=>L 2=>M
    const frenchDays = ["L", "M", "M", "J", "V", "S", "D"];
    averageSessions.map((item, index) => (item.day = frenchDays[index]));
    // Changing performance names from english to french
    const performanceNames = [
      "Cardio",
      "Energie",
      "Endurance",
      "Force",
      "Vitesse",
      "Intensité",
    ];
      performance.data.map((item, index) => (item.kind = performanceNames[index]));
    // adapting score key sometimes named score or todayScore
  if(!mainData.todayScore){console.log("Pas de clé todayScore");mainData["todayScore"]=mainData.score};
   
  }



if(averageSessions.length>0||
  performance.length > 0 || mainData.length > 0){
  formatDataForRecharts()}

  

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
      <div className="hello">
        {" "}
        Bonjour <div className="hello-red">{mainData.userInfos.firstName}</div>
      </div>
      <div className="message">
        {" "}
        Félicitation ! Vous avez explosé vos objectifs hier 👏{" "}
      </div>
      <div className="charts-container">
        <ActivityChart activity={activity} />
        <AverageSessionsChart averagesessions={averageSessions} />
        <PerformanceChart performance={performance} />
        <ScoreChart maindata={mainData} /> 
        <SideCards keydata={mainData.keyData} />
      </div>
    </div>
  );
};

export default User;
