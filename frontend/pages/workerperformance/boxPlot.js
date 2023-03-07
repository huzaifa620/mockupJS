import ApexChart from 'components/UiElements/ApexChart/ApexChart';

export default function ApexCharts({ args }) {
    const options = {
    chart: {
      id: args?.id,
      type: 'boxPlot',
    },
    title: {
      text: '',
      align: 'left',
    },
    xaxis: {
      title: {
        text: 'Models',
      },
    },
    yaxis: {
      title: {
        text: 'Minutes',
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
      boxPlot: {
        colors: {
          upper: '#004899',
          lower: '#004950',
        },
      },
    },
  };
  return (
    <>
      <div id="chart">
        <ApexChart
          options={options}
          series={[
            {
              data: args?.boxPlotValue,
            },
          ]}
          type="boxPlot"
          height={500}
        />
      </div>
    </>
  );
}
