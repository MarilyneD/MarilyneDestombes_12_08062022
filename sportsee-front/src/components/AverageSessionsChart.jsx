import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AverageSessionsChart = ({averagesessions}) => {




    return (
       
        <ResponsiveContainer className=
        "sessions" width="100%" aspect={1}>
        <LineChart
          width={500}
          height={300}
          data={averagesessions}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
      </ResponsiveContainer>




    );
};

export default AverageSessionsChart;