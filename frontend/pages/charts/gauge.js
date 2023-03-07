import React from "react";
import ApexChart from "components/UiElements/ApexChart/ApexChart";

const gauge = (props) => {
  
  var options = {
    series: [props.args],
    chart: {
      type: "radialBar",
      offsetY: -20,
      sparkline: {
        enabled: true,
      },
    },
    colors: ["#767676"],
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "#e7e7e7",
          strokeWidth: "97%",
          margin: 5, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            color: "#767676",
            opacity: 1,
            blur: 2,
          },
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: -2,
            fontSize: "14px",
          },
        },
      },
    },
    grid: {
      padding: {
        top: -10,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        shadeIntensity: 0.4,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 53, 91],
      },
    },
    labels: ["Average Results"],
  };

  return (
    <div>
      <ApexChart
        options={options}
        series={[props.args * 100]}
        type="radialBar"
        height="100px"
      />
    </div>
  );
};

export default gauge;
