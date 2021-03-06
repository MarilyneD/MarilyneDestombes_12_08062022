import React from "react";
import PropTypes from 'prop-types'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";



/**
 * @component Component for showing a custom tooltip of the user activity.
 */

const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div className="custom-tooltip-activity">
        <p className="label1">{` ${payload[0].value}`}kg</p>
        <p className="label2">{` ${payload[1].value}`}kCal</p>
      </div>
    );
  }

  return null;
};




/**
 * Component : Shows activity chart
 * @typedef {object} Props
 * @property {Array} activity - The array containing weight and burnt calories for each day.
 * @return {React.ReactElement} 
 */


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

        <Tooltip content={<CustomTooltip />} offset={30}   contentStyle={ { whiteSpace: 'inherit', backgroundColor: '#0000EE' } }/>
        <Legend
          className="barchart-legend"
          wrapperStyle={{ top: 35, left: "30%" }}
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
          name="Calories br??l??es (kCal)"
          dataKey="calories"
          yAxisId="calories"
          fill="#E60000"
          barSize={12}
          radius={[10, 10, 0, 0]}
        />
        <text x={110} y={45} textAnchor="middle" dominantBaseline="middle">
          Activit?? quotidienne
        </text>
      </BarChart>
    </ResponsiveContainer>
  );
};




// Props types
ActivityChart.propTypes = {
  activity: PropTypes.array.isRequired,
}


// Props types
CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
}




export default ActivityChart;
