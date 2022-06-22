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
  Label,
  ResponsiveContainer,
} from "recharts";

const ActivityChart = ({ activity }) => {
  return (
    <ResponsiveContainer className="activity" width="100%" height="100%">
      <BarChart
        width={600}
        height={400}
        data={activity}
        style={{ backgroundColor: "#F4F4F4" }}
        margin={{
          top: 110,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="day" axisLine={false} />

        <YAxis
          yAxisId="weight"
          domain={["dataMin-1", "dataMax+2"]}
          orientation="right"
          axisLine={false}
          tickLine={false}
          tickMargin={10}
          tickCount={3}
        />
        <YAxis yAxisId="calories" axisLine={false} tickLine={false} hide />

        <Tooltip />
        <Legend
          className="barchart-legend"
          wrapperStyle={{ top: 35, left: 400 }}
          iconType="circle"
          formatter={(value) => {
            return <span style={{ color: "#74798C" }}>{value}</span>;
          }}
        />

        <Bar
          name="Poids (kg)"
          dataKey="kilogram"
          yAxisId="weight"
          fill="#000000"
          barSize={12}
          radius={[10, 10, 0, 0]}
        />
        <Bar
          name="Calories brûlées (kCal)"
          dataKey="calories"
          yAxisId="calories"
          fill="#E60000"
          barSize={12}
          radius={[10, 10, 0, 0]}
        />
        <text x={110} y={45} textAnchor="middle" dominantBaseline="middle">
          Activité quotidienne
        </text>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ActivityChart;
