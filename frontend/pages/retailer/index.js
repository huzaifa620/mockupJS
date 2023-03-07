import React, { useEffect, useState } from "react";
import PageTitle from "components/UiElements/PageTitle/PageTitle";
import Head from "next/head";
import LineBarv2 from "components/retailer/lineGraphv2";
import CalendarApp from "../../containers/Calendar/oem/newcalendar/index";
import { ModalButton } from "baseui/modal";
import Container from "components/UiElements/Container/Container";
import { Block } from "baseui/block";
import LineBar from "../../components/retailer/lineGraph";
import CreateOrUpdateEvent from "pages/oem/CreateOrUpdateEvent";
import jsonData from './data.json'
import data from './data2.json'

const index = () => {
  const [event, setEvent] = useState(false);
  const [works, setWorks] = useState([]);
  const [isOpen, setIsOpen] = React.useState(false);
  function onSubmit(value) {
    setIsOpen(false);
    setWorks([...works, value]);
  }
  const handleClick = () => {
    setEvent(true);
    setIsOpen(true);
  };
  function close() {
    setIsOpen(false);
    setEvent(null);
  }

  var workshopData = [
    {
      name: "Installer 1 - ASC",
      load: [24, 28, 32, 35, 28, 29, 36, 39, 42, 11, 17, 23, 27],
    },
    {
      name: "Installer 2",
      load: [17, 25, 16, 17, 19, 25, 32, 15, 31, 42, 17, 24, 20],
    },
    {
      name: "Installer 3",
      load: [28, 18, 22, 25, 18, 19, 26, 29, 32, 15, 17, 24, 25],
    },
  ];

  const [Index, setIndex] = useState(0);
  const [IndexModel, setIndexModel] = useState(0);
  const [Workshop, setWorkshop] = useState(0);
  
  useEffect(() => {
    document
      .querySelectorAll(".rbc-btn-group")
      .forEach((p) => {
        p.style.display = "None";
      });

    document.getElementsByTagName("nav")[0].style.display = "None";
    if (sessionStorage.emailType.includes("toyota")) {
      setIndex(4);
    } else if (sessionStorage.emailType.includes("honda")) {
      setIndex(3);
    } else if (sessionStorage.emailType.includes("hyundai")) {
      setIndex(2);
    } else if (sessionStorage.emailType.includes("nissan")) {
      setIndex(1);
    } else if (sessionStorage.emailType.includes("ford")) {
      setIndex(0);
    } else {
      setIndex(0);
    }
  }, []);

  function showInfo() {
    var value = parseInt(
      document.getElementById("dropdown").value
    );
    setIndexModel(value);
  }

  function showInfoWorkshop() {
    var value = parseInt(
      document.getElementById("dropdown2").value
    );
    setWorkshop(value);
  }
  return (
    <>
      <Head>
        <title>Retailer/Dealership</title>
      </Head>
      <PageTitle title={"Retailer/Dealership"} subtitle={""} />
      <div className="w-full flex flex-col items-center justify-center">
        <span className="m-2 text-6xl font-black text-customDarkBlue z-10">
          {data[Index]["name"]}
        </span>
        <div className="w-full flex-row flex justify-center items-center z-10 mb-10">
          <label className="m-2 text-xl font-semibold text-customDarkBlue">
            Select Model
          </label>
          <select
            id="dropdown"
            onChange={showInfo}
            className="w-1/4 p-2.5 text-gray-700 font-bold bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
          >
            {data[Index]["models"].map((val, ind) => {
              return (
                <option value={ind} key={ind} className="font-bold">
                  {val}
                </option>
              );
            })}
          </select>
        </div>
        <div className="w-full flex flex-col justify-center items-center mt-10 mb-10">
          <span className="text-2xl font-black">
          Total sunroof market demand
          </span>
          <LineBarv2
            args={data[Index]["sunroof"][IndexModel]}
            args2={data[Index]["oemCapacity"][IndexModel]}
            sunroof={true}
          />
          <div className="w-[83%] flex flex-row items-start justify-end -mt-[44px]">
            {/* <span className="text-sm text-black">Prediction</span> */}
          </div>
        </div>
        <div className="w-full flex-row flex justify-center items-center z-10 mb-10 mt-10">
          <label className="m-2 text-xl font-semibold text-customDarkBlue">
            Select Installer
          </label>
          <select
            id="dropdown2"
            onChange={showInfoWorkshop}
            className="w-1/4 p-2.5 text-gray-700 font-bold bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
          >
            {workshopData.map((val, ind) => {
              return (
                <option value={ind} key={ind} className="font-bold">
                  {val.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <span className="text-2xl font-black">Installer Capacity</span>
          <LineBar args={workshopData[Workshop]["load"]} />
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center justify-center mb-8">
          <h1 className="font-black text-4xl">Next 3 months Schedule </h1>
          <span className="font-black text-xl">
            No. of Booked Jobs: {jsonData[Workshop]["calendar"].length}
          </span>
        </div>
        <div className="flex flex-row justify-evenly items-start space-x-10 mb-10">
          <div className="w-1/3 ml-10 !h-[500px]">
            <CalendarApp
              args={new Date("2023-02-01T00:00:00Z")}
              calendarData={jsonData[Workshop]["calendar"]}
              className="!h-[400px]"
            />
          </div>
          <div className="w-1/3 !h-[500px]">
            <CalendarApp
              args={new Date("2023-03-01T00:00:00Z")}
              calendarData={jsonData[Workshop]["calendar"]}
              className="!h-[400px]"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="w-1/3 !h-[500px]">
            <CalendarApp
              args={new Date("2023-04-01T00:00:00Z")}
              calendarData={jsonData[Workshop]["calendar"]}
              className="!h-[400px]"
            />
          </div>
        </div>
      </div>
      <Container>
        <Block className={"flex items-end justify-end mt-10"}>
          <ModalButton onClick={handleClick}>Schedule Job</ModalButton>
        </Block>
        <Block
          marginTop={"20px"}
          className="border border-gray-700 h-full rounded bg-gray-200"
        >
          <div className="flex flex-col p-2 min-h-[400px]">
            <div className="text-bold text-xl border p-2 text-white bg-slate-800 w-fit">
              Pending Requested Jobs
            </div>
            {works?.map((i) => (
              <div
                className="flex justify-evenly w-full border border-gray-800 bg-slate-400 rounded-lg mt-2"
                key={i.workshop.id}
              >
                <div className="text-base border-gray-700 border p-2 rounded bg-white flex flex-col justify-center items-center">
                  <h3 className="text-bold text-lg uppercase">
                    {i.workshop.name}
                  </h3>
                  <div className="flex flex-col items-center border-gray-400">
                    <div className="text-black text-[14px] text-center">
                      Performance:{" "}
                      <span
                        className=" text-yellow-300 text-center w-full">
                        {
                          i.workshop.modaldata[
                            i.model.slice(0, 3).toLowerCase()
                          ].performance
                        }
                        /10
                      </span>
                    </div>
                    <div
                      className="text-black text-[14px] text-center">
                      Material Present:{" "}
                      <span
                        className=" text-yellow-300 text-center w-full uppercase">
                        {i.workshop.modaldata[i.model.slice(0, 3).toLowerCase()]
                          .material
                          ? "Yes"
                          : "No"}
                      </span>
                    </div>
                    <div className="text-black text-[14px] text-center">
                      Workload:{" "}
                      <span className=" text-yellow-300 text-center w-full">
                        {i.workshop.workload} cars this week
                      </span>
                    </div>
                    <div className="text-black text-[14px] text-center">
                      Start Date:{" "}
                      <span
                        className=" text-yellow-300 text-center w-full">
                        {i.startdate}
                      </span>
                    </div>
                    <div className="text-black text-[14px] text-center">
                      End Date:{" "}
                      <span className=" text-yellow-300 text-center w-full">
                        {i.enddate}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-base p-2 border border-gray-700 rounded bg-white flex flex-col">
                  <div className="flex flex-col items-center">
                    <h3 className="text-bold text-lg capitalize">Car Model</h3>
                    <div className=" text-red-600">{i.model}</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <h3 className="text-bold text-lg capitalize">Total Jobs</h3>
                    <div className=" text-red-600">{i.car}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Block>

        {event && (
          <CreateOrUpdateEvent
            onClose={close}
            isOpen={isOpen}
            event={event}
            onSubmit={(value) => onSubmit(value)}
            index={Index}
          />
        )}
      </Container>
    </>
  );
};

export default index;
