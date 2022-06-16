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
      percentage: 1,
      fill: '#FFF',
    },
    {
      name: 'user',
      percentage: maindata.todayScore,
      fill: '#83a6ed',
    },
    
  ];
  const ScoreLegend = () =>{
    return (
      <div className='score-legend'>
        <p className='score-legend_percentage'>{maindata.todayScore * 100}%</p>
        <p className='score-legend_text'>de votre</p>
        <p className='score-legend_text'>objectif</p>
        </div>
    )
  }
  console.log(maindata.todayScore)



    return (
        
      <ResponsiveContainer className="score" width="100%" aspect={1.5}>
      <RadialBarChart cx="50%" cy="50%" innerRadius="60%" outerRadius="80%" barSize={10} data={data}>
        <RadialBar
          minAngle={0}
          label={{ position: 'insideStart', fill: '#E60000' }}
          // background={{ fill: '#E60000' }}
          fill={'#E60000'}
          clockWise
          dataKey="percentage"
        />
        <Legend align='center' verticalAlign='middle'  content={ScoreLegend}/>
      </RadialBarChart>
    </ResponsiveContainer>
    );
};

export default ScoreChart;

