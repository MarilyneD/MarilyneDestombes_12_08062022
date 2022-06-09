import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ActivityChart from "../components/ActivityChart";
import AverageSessionsChart from "../components/AverageSessionsChart";



const User = () => {
    let { id } = useParams();
    //let navigate = useNavigate();
   
    const [mainData, setMainData] = useState([]);
    const [activity, setActivity] = useState([]);
    const [averagesessions, setAvergagesessions] = useState([]);
     
    
   
async function getMainData() {
    const response = await axios.get('http://localhost:3000/user/'+id)
    return setMainData(response.data.data); 
}
useEffect(() => {
getMainData()}, [mainData]);



     
 
async function getActivity() {
    const response = await axios.get('http://localhost:3000/user/'+id+'/activity')
    return setActivity(response.data.data); 
}
useEffect(() => {
getActivity()}, []);

//console.log("Activity", activity);








async function getSessions() {
    const response = await axios.get('http://localhost:3000/user/'+id+'/average-sessions')
    return setAvergagesessions(response.data.data.sessions);}
useEffect(() => {
getSessions()}, [averagesessions]);



useEffect(() => {
console.log("mainData", mainData);
console.log("DONNNNEEEEEESS",averagesessions);
console.log("Activity", activity);},[]);

if(mainData.length===0){return<p>Chargement des data...</p>;}
    return (
        <div>
          Bonjour {mainData.userInfos.firstName}
          <div className="charts-container">
           <ActivityChart />
           <AverageSessionsChart averagesessions={averagesessions} /> 

            {/* <AverageSessionsChart /> */}

            {/* <LinearChart /> */}
            </div>  
        </div>
    );
};

export default User;