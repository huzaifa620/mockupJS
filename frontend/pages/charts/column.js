import React, { useState } from "react";
import { Grid, Cell } from "baseui/layout-grid";
import { Block } from "baseui/block";
import ApexChart from "components/UiElements/ApexChart/ApexChart";

const Column = () => {
  const [state, setState] = useState({
    series: [
      {
        name: "Satisfaction Percentage",
        data: [91, 89, 92, 88, 93, 93, 94],
      },
    ],
    options: {
      chart: {
        height: 220,
        type: "line",
        dropShadow: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#006ff3", "#39a66d"],
      dataLabels: {
        enabled:true,
        dropShadow:{
          enabled: false,
        },
        formatter: function(val) {
          return val ? val.toFixed(1) + '%' : ''
        }
      },
      stroke: {
        curve: "smooth",
      },
      title: {
        text: "",
        align: "left",
      },
      markers: {
        size: 1,
      },
      xaxis: {
        categories: ["2018", "2019", "2020", "2021", "2022"],
      },
      yaxis: {
        labels: {
          formatter: function(val) {
            return val + '%'
          }
        },
        min: 5,
        max: 100,
      },
      tooltip: {
        y:{
            formatter: function(val) {
                return val + '%'
              }
        }
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -5,
        offsetX: -5,
      },
    },
  });

  return (
    <>
      <Block paddingTop={["0", "0", "0", "40px"]}>
        <Grid gridColumns={12} gridGutters={0} gridMargins={0}>
          <Cell span={[12]}>
            <Block paddingTop={["10px", "15px", "30px", "0"]}>
              <ApexChart
                options={state.options}
                series={state.series}
                type="bar"
                height="320"
              />
            </Block>
          </Cell>
        </Grid>
      </Block>
    </>
  );
};

export default Column;
