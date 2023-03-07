import React, { useEffect, useState } from "react";
import PageTitle from "components/UiElements/PageTitle/PageTitle";
import Container from "components/UiElements/Container/Container";
import ApexCharts from "./boxPlot";
import Head from "next/head";
import { Block } from "baseui/block";
import InformationBox from "./informationBox";
import CalendarApp from "../../containers/Calendar/oem/newcalendar/index";
import jsonData from "./data.json"

const index = () => {
  
  useEffect(() => {
    document
      .querySelectorAll(".rbc-btn-group")
      .forEach((p) => {
        p.style.display = "None";
      });
  });
  
  const [Index, setIndex] = useState(0);
  function showInfo() {
    document.getElementById("dropdown").value;
    var value = parseInt(
      document.getElementById("dropdown").value
    );
    setIndex(value);
  }

  return (
    <>
      <Head>
        <title>Dashboard | Worker Performance Metrics</title>
      </Head>
      <PageTitle title={"Worker Performance Metrics"} subtitle={""} />
      <Container>
        <Block paddingBottom="20px">
          <div className="flex m-4 font-display text-center justify-center space-x-2">
            <label className="m-2 text-xl font-semibold text-customDarkBlue">
              Select Worker
            </label>
            <div className="relative w-full lg:max-w-sm">
              <select
                id="dropdown"
                onChange={showInfo}
                className="w-full p-2.5 text-gray-700 font-bold bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
              >
                {jsonData?.map((val, ind) => {
                  return (
                    <option value={ind} key={ind} className="font-bold">
                      {val.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </Block>
        <Block paddingBottom="20px">
          <div className="pt-6 h-full flex flex-row w-full bg-white justify-start items-start border-white-200 rounded-lg">
            <InformationBox args={jsonData[Index]} />
            <div className="w-11/12">
              <ApexCharts args={jsonData[Index]} />
            </div>
          </div>
        </Block>
        <Block paddingBottom="20px"></Block>
        <div>
          <div className="flex flex-col items-center justify-center mb-8">
            <h1 className="font-black text-4xl">Next 3 months Schedule </h1>
            <span className="font-black text-xl">
              No. of Booked Jobs: {jsonData[Index]["calendar"].length}
            </span>
          </div>
          <div className="flex flex-row justify-evenly items-start space-x-10 mb-10">
            <div className="w-1/3 ml-10 !h-[500px]">
              <CalendarApp
                args={new Date("2023-02-01T00:00:00Z")}
                calendarData={jsonData[Index]["calendar"]}
                className="!h-[400px]"
              />
            </div>
            <div className="w-1/3 !h-[500px]">
              <CalendarApp
                args={new Date("2023-03-01T00:00:00Z")}
                calendarData={jsonData[Index]["calendar"]}
                className="!h-[400px]"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="w-1/3 !h-[500px]">
              <CalendarApp
                args={new Date("2023-04-01T00:00:00Z")}
                calendarData={jsonData[Index]["calendar"]}
                className="!h-[400px]"
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default index;