import React, { useState } from "react";
import { Grid, Cell } from "baseui/layout-grid";
import { Block } from "baseui/block";
import ApexChart from "components/UiElements/ApexChart/ApexChart";

const Bar = () => {
  const [state, setState] = useState({
    series: [
      {
        name: "Ford",
        data: [44, 55, 41, 37, 22, 43, 21],
      },
      {
        name: "Nissan",
        data: [53, 32, 33, 52, 13, 43, 32],
      },
      {
        name: "Hyundai",
        data: [12, 17, 11, 9, 15, 11, 20],
      },
      {
        name: "Honda",
        data: [9, 7, 5, 8, 6, 9, 4],
      },
      {
        name: "Toyota",
        data: [9, 7, 5, 8, 6, 9, 4],
      }
    ],
    options: {
      chart: {
        type: "rangeBar",
        height: 420,
        stacked: true,
        toolbar: {
          tools: {
            zoom: false,
          },
        },
      },
      title: {
        text: "",
        align: "left",
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      stroke: {
        width: 1,
        colors: ["#ffffff"],
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
        ],
        labels: {
          // formatter: function (val: number) {
          //   return val + "K";
          // },
        },
      },
      tooltip: {
        y: {
          // formatter: function (val: number) {
          //   return val + "K";
          // },
        },
      },
      fill: {
        opacity: 1,
      },
      legend: {
        position: "bottom",
        horizontalAlign: "center",
        offsetY: -8,
      },
    },
  });

  return (
    <>
      <Grid gridColumns={12} gridGutters={0} gridMargins={0}>
        <Cell span={[12]}>
          <Block paddingTop={["10px", "15px", "30px", "0"]}>
            <ApexChart
              options={state.options}
              series={state.series}
              type="bar"
              height="420"
            />
          </Block>
        </Cell>
      </Grid>
    </>
  );
};

export default Bar;