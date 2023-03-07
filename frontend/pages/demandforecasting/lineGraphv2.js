import React from "react";
import ApexChart from "components/UiElements/ApexChart/ApexChart";
import options from './data/lineGraphv2Options.json';

const LineBarv2 = (props) => {

  const state = {
    series: [
      {
        name: "Market Sales",
        data: props.args,
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

export default LineBarv2;
