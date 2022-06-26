import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";



const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip-sessions">
        <p className="label-sessions">{` ${payload[0].value}`}min</p>
      </div>
    );
  }

  return null;
};






const AverageSessionsChart = ({ averagesessions }) => {
  const frenchDays = ["L", "M", "M", "J", "V", "S", "D"];

  averagesessions.map((item, index) => (item.day = frenchDays[index]));
  console.log("averagesessions", averagesessions);

  return (
    <ResponsiveContainer className="sessions" width="100%" aspect={1}>
      <LineChart
        width={500}
        height={300}
        data={averagesessions}
        margin={{
          top: 20,
          right: 30,
          left: 30,
          bottom: 0,
        }}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          horizontal={false}
          vertical={false}
        />
        <XAxis
          dataKey="day"
          axisLine={false}
          stroke="#FFF"
          fillOpacity={0.8}
          tickLine={false}
        />
        <YAxis axisLine={false} hide={true} />
        <Tooltip content={<CustomTooltip />} cursor={false}/>
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="#FFF"
          activeDot={{ r: 4 }}
          dot={false}
        />
        <text x={30} y={45} textAnchor="start" dominantBaseline="middle"  fill="#FFF" style={{fontSize:18}} >
          Durée moyenne des sessions
        </text>
      </LineChart>
    </ResponsiveContainer>
  );
};

export default AverageSessionsChart;
