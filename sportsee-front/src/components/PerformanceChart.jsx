
import React, { PureComponent } from 'react';
import { useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';


const PerformanceChart = ({performance}) => {

  const [performanceNew, setPerformanceNew] = useState(performance.data.map((item,index)=> item.kind = performance.kind[index+1] ));
  //console.log("performanceNew",performanceNew)
  

  

  performance.data.map((item,index)=> item.kind = performance.kind[index+1] )

    return (
        
      <ResponsiveContainer className="performance" width="100%" aspect={1}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={performance.data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" />
        <PolarRadiusAxis />
        <Radar name="" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>

    );
};

export default PerformanceChart;





