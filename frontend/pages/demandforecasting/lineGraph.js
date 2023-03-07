import React from "react";
import ApexChart from "components/UiElements/ApexChart/ApexChart";
import options from './data/lineGraphOptions.json';

const LineBar = (props) => {
  const state = {
    series: [
      {
        name: "Forecasted Installation Demand",
        data: props.args,
      },
      {
        name: "OEM Installation Capacity",
        data: props.argSecond,
      },
    ],
    options
  };

  return (
    <>
      <ApexChart
        className="w-5/6"
        options={state.options}
        series={state.series}
        type="line"
        height={500}
      />
    </>
  );
};

export default LineBar;
