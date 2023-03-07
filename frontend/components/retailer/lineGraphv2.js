import React, { useEffect, useState } from "react";
import ApexChart from "components/UiElements/ApexChart/ApexChart";

const LineBarv2 = (props) => {

  var x = props.args2.map(function (item, index) {
    return item - props.args[index];
  });

  const state = {
    series: [
      {
        name: "OEM Capacity",
        data: props.args,
      },
      {
        name: "Forecasted Bookings",
        data: props.args2,
      },
      {
        name: "Predicted ASC Bookings",
        data: x,
      },
    ],
    options: {
      chart: {
        height: 420,
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: "smooth",
      },
      title: {
        text: "",
        align: "left",
      },

      xaxis: {
        categories: [
          "Jan' 23",
          "Feb' 23",
          "Mar' 23",
          "Apr' 23",
          "May' 23",
          "Jun' 23",
          "Jul' 23",
          "Aug' 23",
          "Sept' 23",
          "Oct' 23",
          "Nov' 23",
          "Dec' 23",
          "Jan' 24",
        ],
        title: {
          text: "Months",
        },
      },
      yaxis: {
        title: {
          text: "No. of units (with sunroofs)",
        },
        labels: {
          show: true,
          align: "left",
          minWidth: 0,
          maxWidth: 360,
          style: {
            colors: [],
            fontSize: "12px",
            fontFamily: "Helvetica, Arial, sans-serif",
            fontWeight: 400,
            cssClass: "apexcharts-yaxis-label",
          },
          offsetX: -5,
          offsetY: 10,
          rotate: 0,
        },

        min: 0,
        max: 100,
      },
      annotations: {
        xaxis: [
          {
            x: "Quarter 1, 2023",
            borderColor: "#775DD0",
            label: {
              style: {
                color: "#000000",
              },
              text: "Predictions",
            },
          },
        ],
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
      },
    },
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
