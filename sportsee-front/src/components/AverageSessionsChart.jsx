import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AverageSessionsChart = ({averagesessions}) => {

   const frenchDays=['L','M','M','J','V','S','D']

   averagesessions.map((item,index)=> item.day = frenchDays[index] )
   console.log('averagesessions',averagesessions);

    return (
       
        <ResponsiveContainer className=
        "sessions" width="100%" aspect={1.2}>
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
          <CartesianGrid strokeDasharray="3 3" horizontal={false} vertical={false} />
          <XAxis dataKey="day" axisLine={false} stroke="#FFF" fillOpacity={0.8}  tickLine={false}/>
          <YAxis axisLine={false} hide={true}/>
          <Tooltip />
          <Line type="monotone" dataKey="sessionLength" stroke="#FFF" activeDot={{ r: 4 }} dot={false}/>
          </LineChart>
      </ResponsiveContainer>




    );
};

export default AverageSessionsChart;