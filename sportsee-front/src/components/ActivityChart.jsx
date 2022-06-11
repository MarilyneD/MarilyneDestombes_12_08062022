
import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const ActivityChart = ({activity}) => {
    return (
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
          <CartesianGrid strokeDasharray="3 3" vertical={false}/>
          <XAxis dataKey="" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" height={26} />
          <Bar dataKey="kilogram" fill="#000000" barSize={15}/>
          <Bar dataKey="calories" fill="#E60000" barSize={15}/>
        </BarChart>
      </ResponsiveContainer>
    );
};

export default ActivityChart;

