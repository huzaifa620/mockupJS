import React from "react";
import { Grid, Cell } from "baseui/layout-grid";
import { Block } from "baseui/block";
import ApexChart from "components/UiElements/ApexChart/ApexChart";

const Bar = (props) => {

  const options = {
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
      categories: props?.categories,
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
  };

  return (
    <>
      <Grid gridColumns={12} gridGutters={0} gridMargins={0}>
        <Cell span={[12]}>
          <Block paddingTop={["10px", "15px", "30px", "0"]}>
            {props?.args.length > 0 ? (
              <ApexChart
                options={options}
                series={props?.args}
                type="bar"
                height="420"
              />
            ) : (
              ""
            )}
          </Block>
        </Cell>
      </Grid>
    </>
  );
};

export default Bar;