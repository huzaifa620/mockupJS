import React from "react";
import { Grid, Cell } from "baseui/layout-grid";
import { Block } from "baseui/block";
import Container from "components/UiElements/Container/Container";
import ApexChart from "components/UiElements/ApexChart/ApexChart";
import options from './data/columnChartOptions.json';

const ColumnChart = (props) => {
const state = {
  series: [
    {
    name: "Vehicles",
    data: props.args?.value,
    },
  ],
  options,
};

return (
  <>
    <Container>
      <Block paddingTop={["0", "0", "0", "40px"]}>
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
      </Block>
    </Container>
    </>
);
};

export default ColumnChart;