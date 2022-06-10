import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ActivityChart from "../components/ActivityChart";
import AverageSessionsChart from "../components/AverageSessionsChart";
import PerformanceChart from "../components/PerformanceChart";


const User = () => {
    let { id } = useParams();
    //let navigate = useNavigate();
   
    const [mainData, setMainData] = useState([]);
    const [activity, setActivity] = useState([]);
    const [averagesessions, setAvergagesessions] = useState([]);
    const [performance, setPerformance] = useState([]);
     
   
async function getMainData() {
    const response = await axios.get('http://localhost:3000/user/'+id)
    return setMainData(response.data.data);}
useEffect(() => {
getMainData()}, [mainData]);
 
 
async function getActivity() {
    const response = await axios.get('http://localhost:3000/user/'+id+'/activity')
    return setActivity(response.data.data.sessions);}
useEffect(() => {
getActivity()}, []);


async function getSessions() {
    const response = await axios.get('http://localhost:3000/user/'+id+'/average-sessions')
    return setAvergagesessions(response.data.data.sessions);}
useEffect(() => {
getSessions()}, [averagesessions]);


async function getPerformance() {
    const response = await axios.get('http://localhost:3000/user/'+id+'/performance')
    return setPerformance(response.data.data);}
useEffect(() => {
getPerformance()}, []);




useEffect(() => {
console.log("mainData", mainData);
console.log("DONNNNEEEEEESS",averagesessions);
console.log("Activity", activity);
console.log("Performance", performance);
},[]);

//console.log("PerformanceAAA", performance)




if(mainData.length===0){return<p>Chargement des data...</p>;console.log("Performance", performance);}
    return (
        <div className="user-container">
          Bonjour {mainData.userInfos.firstName}
          <div className="charts-container">
           <ActivityChart activity={activity} />
           <AverageSessionsChart averagesessions={averagesessions} />
           <PerformanceChart performance={performance}/>
        </div>  
        </div>
    );
};

export default User;