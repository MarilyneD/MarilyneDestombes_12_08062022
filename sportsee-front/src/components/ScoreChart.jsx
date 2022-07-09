import React from "react";
import {RadialBarChart,RadialBar,Legend,ResponsiveContainer } from "recharts";

// const style = {
//   top: "50%",
//   right: 0,
//   lineHeight: "50px",
// };



/**
 * Component : Shows score chart
 * @typedef {Object} Props
 * @property {Object} maindata - Containing multiple objects
 * @property {Number} maindata.todayScore - The number score of the day !!!
 * @return {React.ReactElement} 
 */



const ScoreChart = ({ maindata }) => {
 
  const data = [
    {
      name: "user",
      percentage: maindata.todayScore,
      fill: "#FF0000",
    },
    {
      name: "reference",
      percentage: 1,
      fill: "transparent",
    },
  ];




  const ScoreLegend = () => {
    return (
      <div className="score-legend">
        <p className="score-legend_percentage">{maindata.todayScore * 100}%</p>
        <p className="score-legend_text">de votre</p>
        <p className="score-legend_text">objectif</p>
      </div>
    );
  };
  

  return (
    <ResponsiveContainer className="score" width="100%" aspect={1} >
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="60%"
        outerRadius="80%"
        barSize={12}
        data={data}
        startAngle={200}
        endAngle={-160}
        style={{height: '100%', backgroundColor: "#F4F4F4" }}
        
      >
        
        <RadialBar
          dataKey="percentage"
          cornerRadius="10"
          fill="#FFF"
        />
        <text x="15%" y="15%" textAnchor="middle" dominantBaseline="middle">
          Score
        </text>
        <Legend align="center" verticalAlign="middle" content={ScoreLegend} />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default ScoreChart;
