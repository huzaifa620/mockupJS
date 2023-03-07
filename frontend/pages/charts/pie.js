import React, { useState } from "react";
import { Grid, Cell } from "baseui/layout-grid";
import { Block } from "baseui/block";
import Container from "components/UiElements/Container/Container";
import ApexChart from "components/UiElements/ApexChart/ApexChart";

const Pie = (props) => {
  let values = useState(null)
  let labels = useState(null)
  
  if (props.args) {
    values = props.args.pieValue.map((i,ind)=>{
      if(ind!=0){
        return i[1]
      }
      
    })
    labels = props.args.pieValue.map((i,ind)=>{
      if(ind!=0){
        return i[0]
      }
    })
    values.shift()
    labels.shift()
  }
  
  const state = {
    series:values,
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      title: {
        text: "",
        align: "left",
      },
      labels: props.args
        ? labels
        : ["Product A", "Product B", "Product C", "Product D", "Product E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };

  return (
    <>
      <Container>
        <Block paddingTop={["0", "0", "0", "40px"]}>
          <Grid gridColumns={12} gridGutters={0} gridMargins={0}>
            <Cell span={12}>
              <Block paddingTop={["10px", "15px", "30px", "0"]}>
                {
                  state.series == null? "" : <ApexChart
                  options={state.options}
                  series={state.series}
                  type="pie"
                  height={420}
                />
                }
              </Block>
            </Cell>
          </Grid>
        </Block>
      </Container>
    </>
  );
};

export default Pie;
