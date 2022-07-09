import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";




/**
 * Component : Shows average sessions chart
 * @typedef {Object} Props
 * @property {Object} performance - Containing two objects and one data array
 * @property {Array} performance.data - The array containing speed, intensity, etc...
 * @return {React.ReactElement} 
 */



const PerformanceChart = ({ performance }) => {
  
  return (
    <ResponsiveContainer className="performance" width="100%" aspect={1} >
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
