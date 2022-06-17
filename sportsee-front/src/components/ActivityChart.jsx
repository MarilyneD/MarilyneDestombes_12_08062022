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
    
    <ResponsiveContainer className="activity" width="99%" aspect={4}  >
    {/* <h1>Activité Quotidienne</h1> */}
      <BarChart
        width={600}
        height={400}
        data={activity}
        margin={{
          top: 90,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="day" axisLine={false}/>
        <YAxis axisLine={false}  orientation="right"/>
        <Tooltip />
        <Legend
              wrapperStyle={{top: 0, left: 25}}
            />
        
        <Bar name="Poids (kg)" dataKey="kilogram" fill="#000000" barSize={15} />
        <Bar name="CAlories brûlées (kCal)" dataKey="calories" fill="#E60000" barSize={15} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ActivityChart;
