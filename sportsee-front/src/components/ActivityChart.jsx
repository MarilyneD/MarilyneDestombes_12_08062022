import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ActivityChart = ({ activity }) => {
  return (
    <div className="activity-chart">
      <h1>Activité Quotidienne</h1>
    <ResponsiveContainer className="activity" width="100%" aspect={4}>
      <BarChart
        width={500}
        height={300}
        data={activity}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="" />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" height={26} />
        <Bar dataKey="Poids (kg)" fill="#000000" barSize={15} />
        <Bar dataKey="Calories brûlées (kCal)" fill="#E60000" barSize={15} />
      </BarChart>
    </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;
