import React, { PureComponent } from "react";
import {RadialBarChart,RadialBar,Legend,ResponsiveContainer } from "recharts";

const style = {
  top: "50%",
  right: 0,
 // transform: "translate(0, -50%)",
  lineHeight: "50px",
};



const ScoreChart = ({ maindata }) => {

  let score=0;
  if(maindata.todayScore){score=maindata.todayScore}else{score=maindata.score};
  console.log("score",score);
  const data = [
    {
      name: "user",

      percentage: score,
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
        <p className="score-legend_percentage">{score * 100}%</p>
        <p className="score-legend_text">de votre</p>
        <p className="score-legend_text">objectif</p>
      </div>
    );
  };
  

  return (
    <ResponsiveContainer className="score" width="100%" height="100%">
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="60%"
        outerRadius="80%"
        barSize={12}
        data={data}
        startAngle={200}
        endAngle={-160}
        style={{ backgroundColor: "#F4F4F4" }}

      >
        <RadialBar
          clockWise
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
