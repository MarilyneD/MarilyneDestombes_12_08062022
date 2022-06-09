import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Collapse from "../components/Collapse";
import Gallery from "../components/Gallery";
import Stars from "../components/Stars";

const Lodging = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("../../data/logements.json").then((res) => setData(res.data));
  }, []);


  const [databis, setDatabis] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/user/12").then((res) => setDatabis(res.data));
  }, []);

  console.log("informations", databis);


  useEffect(() => {
    if (data.length > 0) {
      if (!data.map((rental) => rental.id).includes(id)) {
        navigate("/Notfound");
      }
    }
  }, [data]);

  let rental = data.filter((rental) => rental.id === id);

  if (rental.length === 0) {
    return <p>Chargement des data...</p>;
  }
  return (
    <div className="lodging">
      <Gallery rental={rental} />

      <div className="title">
        <div className="title__title">
          {rental[0].title}
          <div className="title__location">{rental[0].location}</div>
        </div>
        <div className="title__host">
          <div className="title__host__name">{rental[0].host.name}</div>
          <img
            src={rental[0].host.picture}
            alt="profil de l'hébergeur"
          />
        </div>

        <div className="tags">
          {rental[0].tags.map((tag) => (
            <div key={tag} className="tag">
              {tag}
            </div>
          ))}
        </div>

        <div className="stars-container">
          <Stars nbStars={Number(rental[0].rating)} />
        </div>
      </div>

      <div className="description-equipment">
        <Collapse title="Description" text={<p>{rental[0].description}</p>} />

        <Collapse
          title="Équipements"
          text={
            <ul>
              {rental[0].equipments.map((equipment) => (
                <li key={equipment}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
};

export default Lodging;
