import React, { useState } from "react";
import { Grid, Cell } from "baseui/layout-grid";
import { Block } from "baseui/block";
import ApexChart from "components/UiElements/ApexChart/ApexChart";
import data from './data/area.json'

const Area = () => {

  const [state, setState] = useState({
    series: [
      { name: 'Defective Losses',
        data,
      },
    ],
    options: {
      chart: {
        type: "area",
        height: 420,
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
        style: "hollow",
      },
      yaxis:{
        title: {
            text: "Losses Incurred ($)",
          },
        min:0,
        max:11000,
        tickAmount: 11,
      },
      xaxis: {
        title: {
            text: "Months",
          },
        type: "datetime",
        min: new Date("01 Jan 2022").getTime(),
        tickAmount: 6,
      },
      annotations: {
        xaxis: [
          {
            x: new Date("2022-06-02T00:00:00Z").getTime(),
            borderColor: '#775DD0',
            label: {
              style: {
                color: '#000000',
              },
              text: 'Solution Deployed'
            }
          }
        ]
      },
      tooltip: {
        x: {
          format: "dd MMM yyyy",
        },
        y:{
            formatter: function(val) {
                return val + '$'
              }
        }
      },
      colors: ["#006ff3"],
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 100],
        },
      },
    },
  });

  return (
    <>
      <Grid gridColumns={12} gridGutters={0} gridMargins={0}>
        
        <Cell span={[12]}>
          <Block paddingTop={["10px", "18px", "30px"]}>
            <Block paddingTop="20px">
              <ApexChart
                options={state.options}
                series={state.series}
                type="area"
                height={420}
              />
            </Block>
          </Block>
        </Cell>
      </Grid>
    </>
  );
};

export default Area;