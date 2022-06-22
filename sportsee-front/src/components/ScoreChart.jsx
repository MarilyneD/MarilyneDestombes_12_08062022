import React, { PureComponent } from "react";
import {RadialBarChart,RadialBar,Legend,ResponsiveContainer } from "recharts";

const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "50px",
};

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
  console.log(maindata.todayScore);

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
      >
        <RadialBar
          clockWise
          dataKey="percentage"
          cornerRadius="10"
          fill="#FFF"
        />
        <text x={60} y={55} textAnchor="middle" dominantBaseline="middle">
          Score
        </text>
        <Legend align="center" verticalAlign="middle" content={ScoreLegend} />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default ScoreChart;
