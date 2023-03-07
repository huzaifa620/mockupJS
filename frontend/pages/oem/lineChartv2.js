import React from "react";
import { Chart } from "react-google-charts";
import { data } from "containers/Calendar/oem/lineChart";

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// export const data = [
//   ["x", "Performance"],

// ];
// var prevVal=getRandomInt(85,90);
// for (let index = 0; index < 30; index++) {
//   var val=getRandomInt(85,90);
//   while((val==prevVal)){
//     var val=getRandomInt(85,90);
//   }
//   data.push([,val])

//   prevVal=val;
// }

export default function LineChartv2() {
  const options = {
    legend: { position: "none" },

    hAxis: {
      title: "",
      // format: "yyyy-MM-dd",
    },
    vAxis: {
      title: "Performance",
      format: "0",
      ticks: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    },
    series: {
      1: { curveType: "function" },
    },
    // pointsVisible: true
  };
  return (
    <Chart
      chartType="LineChart"
      className="w-full rounded-lg"
      loader={<div>Loading Chart</div>}
      data={data}
      options={options}
      width="100%"
      height="200px"
    />
  );
}
