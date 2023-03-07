import React from 'react';
import dynamic from 'next/dynamic';
const ChartWithNoSSR = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});


const ApexChart = (props) => {
  return <ChartWithNoSSR {...props} />;
};

export default ApexChart;
