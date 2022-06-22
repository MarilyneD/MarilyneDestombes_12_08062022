import React from "react";
import UserCard from "../components/UserCard";

const Home = () => {
  const avatars = [
    [12, "/img/male.png"],
    [18, "/img/female.png"],
  ];

  return (
    <div className="main-section">
      <ul>
        {avatars.map((item) => (
          <UserCard key={item[0]} id={item[0]} avatar={item[1]} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
