import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';





const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '50px',
};

  





const ScoreChart = ({maindata}) => {


  const data = [
    {
      name: '100%',
      uv: 1,
      fill: '#FFF',
    },
    {
      name: 'user',
        uv: maindata.todayScore,
      fill: '#83a6ed',
    },
    
  ];
  console.log(maindata.todayScore)



    return (
        
      <ResponsiveContainer className="score" width="100%" height="100%">
      <RadialBarChart cx="50%" cy="50%" innerRadius="60%" outerRadius="80%" barSize={10} data={data}>
        <RadialBar
          minAngle={0}
          label={{ position: 'insideStart', fill: '#fff' }}
          background
          clockWise
          dataKey="uv"
        />
        {/* <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} /> */}
      </RadialBarChart>
    </ResponsiveContainer>
    );
};

export default ScoreChart;

