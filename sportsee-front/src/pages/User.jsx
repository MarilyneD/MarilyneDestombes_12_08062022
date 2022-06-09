import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Duration from "../components/Duration";

const User = () => {
    let { id } = useParams();
    //let navigate = useNavigate();
   //console.log("id",id);

    const [data, setData] = useState([]);
    useEffect(() => {
      axios.get("http://localhost:3000/user/"+id).then((res) => setData(res.data));
    }, []);
  
    console.log("data", data.data);


    const [averagesessions, setAvergagesessions] = useState([]);
    useEffect(() => {
      axios.get("http://localhost:3000/user/"+id+"/average-sessions").then((res) => {setAvergagesessions(res.data);});
    }, []);
  
    console.log("averagesessions.data", averagesessions.data);

    console.log("sessions sessions", averagesessions.data.sessions);

    //console.log("JSON.parse", JSON.parse(averagesessions.data));


    //console.log("Object.keys(jsonObj)", Object.keys(averagesessions.data));

    //<Duration  props={averagesessions.data.sessions}    />






    return (
        <div>
            <Duration weeksessions={averagesessions.data.sessions} />
        </div>
    );
};

export default User;