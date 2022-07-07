import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const PerformanceChart = ({ performance }) => {
  
  return (
    <ResponsiveContainer className="performance" width="100%" height="100%" >
      <RadarChart cx="50%" cy="50%" outerRadius="75%" data={performance.data}>
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey="kind"
          stroke="#FFF"
          dy={5}
          tickLine={false}
          tick={{
            fontSize: "75%",
            fontWeight: 500,
          }}
        />
        <Radar
          name=""
          dataKey="value"
          stroke="transparent"
          fill="#E60000"
          fillOpacity={0.8}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default PerformanceChart;
