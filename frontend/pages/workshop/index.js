import React, { useEffect } from "react";
import PageTitle from "components/UiElements/PageTitle/PageTitle";
import Container from "components/UiElements/Container/Container";
import { Grid, Cell } from "baseui/layout-grid";
import { Block } from "baseui/block";
import DropdownComponent from "./dropdown";
import InformationBox from "./informationBoxv2";
import Head from "next/head";
import { useThemeSwitcherCtx, THEME } from "../../contexts/theme/theme.provider";

const index = () => {
  const timeSteps = [1500, 1000, 3000, 1500, 3000];
  var tasks = [
    { name: "Ford F-150", order: 12 , time: 2,resource:'Sean Davidson'},
    { name: "Toyota RAV4", order: 9 ,time: 2,resource:'Dennis Ray'},
    { name: "Honda CR-V", order: 7, time: 1,resource:'Gilbert Holland'},
    { name: "Nissan Altima", order: 12,time: 2,resource:'Sean Davidson' },
    { name: "Audi Q5", order: 10,time: 3,resource:'Dennis Ray'},
    { name: "BMW X5", order: 11,time: 3,resource:'Sean Davidson'},
    { name: "Kia Sportage", order: 13,time: 2,resource:'Gilbert Holland'},
    { name: "Toyota Camry", order: 9,time: 2,resource:'Dennis Ray'},
    { name: "Toyota Tacoma", order: 12,time: 3,resource:'Gilbert Holland'},
    { name: "BMW X3", order: 8,time: 2,resource:'Sean Davidson'},
    { name: "Lexus RX", order: 12,time:3,resource:'Dennis Ray'},
    { name: "Hyundai Santa Fe", order: 13,time:3,resource:'Dennis Ray'},
    { name: "Subaru Forester", order: 11,time:3,resource:'Gilbert Holland'},
  ];
  const jsonData = [
    {
      name: "Sean Davidson",
      performance: 0.92,
      address: "1883 Venture Place, Alberta",
      designation: "Senior Technician",
      totalJobs: 579,
      best: "Ford F-150",
      score: 91,
      desc: "Best and Outstanding Skills. Very Reliable",
      pieValue: [
        ["Task", "Hours per Day"],
        ["Ford", 11],
        ["Nissan", 2],
        ["Hyundai", 2],
        ["Honda", 2],
        ["Toyota", 7],
      ],
      pic: "/images/image.jpg",
      boxPlotValue: [
        { x: "Ford", y: [54, 66, 69, 75, 88] },
        { x: "Nissan", y: [43, 65, 69, 76, 81] },
        { x: "Hyundai", y: [31, 39, 45, 51, 59] },
        { x: "Honda", y: [39, 46, 55, 65, 71] },
        { x: "Toyota", y: [29, 31, 35, 39, 44] },
      ],
      id: "index1",
    },
    {
      name: "Dennis Ray",
      performance: 0.83,
      address: "4514 Carling Avenue, Ontario",
      designation: "Junior Technician",
      totalJobs: 312,
      best: "Ford F-100",
      score: 82,
      desc: "Satisfactory Performance. Has outstanding handskills",
      pieValue: [
        ["Task", "Hours per Day"],
        ["Ford", 15],
        ["Nissan", 3],
        ["Hyundai", 14],
        ["Honda", 1],
        ["Toyota", 4],
      ],
      pic: "https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.jpg?s=612x612&w=0&k=20&c=uP9rKidKETywVil0dbvg_vAKyv2wjXMwWJDNPHzc_Ug=",
      boxPlotValue: [
        { x: "Ford", y: [44, 56, 59, 65, 78] },
        { x: "Nissan", y: [33, 55, 59, 66, 71] },
        { x: "Hyundai", y: [21, 29, 35, 41, 49] },
        { x: "Honda", y: [29, 36, 45, 55, 61] },
        { x: "Toyota", y: [19, 21, 25, 29, 34] },
      ],
      id: "index2",
    },
    {
      name: "Gilbert Holland",
      performance: 0.81,
      address: "3807 rue Ontario Ouest, Quebec",
      designation: "Junior Technician",
      totalJobs: 209,
      best: "Ford GT",
      score: 88,
      desc: "Eager to learn but still needs experience!",
      pieValue: [
        ["Task", "Hours per Day"],
        ["Ford", 4],
        ["Nissan", 5],
        ["Hyundai", 11],
        ["Honda", 15],
        ["Toyota", 17],
      ],
      pic: "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?s=612x612&w=0&k=20&c=kPvoBm6qCYzQXMAn9JUtqLREXe9-PlZyMl9i-ibaVuY=",
      boxPlotValue: [
        { x: "Ford", y: [53, 75, 79, 86, 91] },
        { x: "Nissan", y: [64, 76, 79, 75, 98] },
        { x: "Hyundai", y: [41, 49, 55, 61, 69] },
        { x: "Honda", y: [49, 56, 65, 75, 81] },
        { x: "Toyota", y: [39, 41, 45, 49, 54] },
      ],
      id: "index3",
    },
  ];
  useEffect(() => {
    let cleanup = false;
    async function beginPage() {
      const text = "Car Model: Likely Ford F-150";
      var elements = document.getElementsByClassName("custom");
      for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        element.getElementsByTagName(
          "div"
        )[0].innerHTML = `<div class="lds-ring${timeSteps[index]} hideMe${timeSteps[index]} ml-1 -mt-0.5"><div></div><div></div><div></div><div></div></div><span class="ml-1 showMe${timeSteps[index]} text-xl font-black">&#10003;</span>`;
        element
          .getElementsByTagName("span")[0]
          .classList.add("text-2xl", "font-black");
        await new Promise((r) => setTimeout(r, timeSteps[index]));
        if (index == 0) {
          try {
            document.getElementsByClassName("custom-text")[0].textContent =
              text;
          } catch {}
        }
        element
          .getElementsByTagName("span")[0]
          .classList.remove("text-2xl", "font-black");
      }
    }
    if (!cleanup) {
      beginPage();
    }
    return () => {
      cleanup = true;
    };
  }, []);

  const { theme, setTheme } = useThemeSwitcherCtx();
  return (
    <>
      <Head>
        <title>Dashboard | Workshop Floor</title>
      </Head>
      <PageTitle title={"Workshop Floor"} subtitle={""} />
      <Container>
        <Block paddingBottom="20px">
          <div className="flex m-4 font-display text-start  justify-center space-x-2 h-full w-full">
            <label
              className={`m-2 text-xl font-semibold ${
                theme === THEME.light ? "text-black" : "text-white"
              } leading-none`}
            >
              Select Workshop
            </label>
            <DropdownComponent
              args={[
                "Workshop Area 1",
                "Workshop Area 2",
                "Workshop Area 3",
                "Workshop Area 4",
              ]}
            />
          </div>
        </Block>
        <Grid gridColumns={12} gridGutters={16} gridMargins={0}>
          <Cell span={[12, 12, 6]}>
            <div className="h-fit w-full">
              <div
                className={`${
                  theme === THEME.light ? "bg-black" : "bg-white"
                } w-full flex items-center justify-center rounded-lg`}
              >
                <video
                  src="/videos/video1.mp4"
                  loop
                  autoPlay
                  muted
                  controls={false}
                  className=" rounded-lg w-[300px] h-fit"
                ></video>
              </div>
              <div className=" mb-4 h-1/4">
                <h1
                  className={`custom-text text-2xl mt-2 flex p-2 font-semibold underline ${
                    theme === THEME.light ? "text-black" : "text-white"
                  }`}
                >
                  Car Model:
                </h1>
                <div className="pt-2 w-full">
                  <ul className={` list-disc ml-8 `}>
                    <li
                      className={`custom p-2 h-fit text-xl text-start ${
                        theme === THEME.light ? "text-black" : "text-white"
                      } flex`}
                    >
                      <span className="">Detecting Car Model</span>
                      <div className="flex">
                        
                      </div>
                    </li>
                    <li
                      className={`custom p-2 h-fit text-xl text-start ${
                        theme === THEME.light ? "text-black" : "text-white"
                      } flex`}
                    >
                      <span className="">Calculating template placement</span>
                      <div className="flex"></div>
                    </li>
                    <li
                      className={`custom p-2 h-fit  text-xl text-start ${
                        theme === THEME.light ? "text-black" : "text-white"
                      } flex`}
                    >
                      <span className="">Overlaying template placement</span>
                      <div className="flex"></div>
                    </li>
                    <li
                      className={`custom p-2 h-fit  text-xl text-start ${
                        theme === THEME.light ? "text-black" : "text-white"
                      } flex`}
                    >
                      <span className="">Fetching placement measurement</span>
                      <div className="flex"></div>
                    </li>
                    <li
                      className={`custom p-2 h-fit  text-xl text-start ${
                        theme === THEME.light ? "text-black" : "text-white"
                      } flex`}
                    >
                      <span className="">
                        Overlaying template placement measurement
                      </span>
                      <div className="flex"></div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Cell>
          <Cell span={[12, 12, 6]}>
            <div className="flex justify-end h-fit w-full">
              <div className="w-full mr-4 pt-6 mb-2 bg-white justify-center  border-white-200 rounded-lg h-fit">
                <InformationBox />
              </div>
            </div>
          </Cell>
          <div className="w-full mx-auto">
            <div className="w-full flex flex-col justify-center items-center mb-2">
              <span className=" text-3xl font-black w-fit">Job Queue</span>
            </div>
          <table className="mx-auto gap-3">
            <tr className="">
              <th className="text-xl text-customDarkBlue font-black p-2 border-2 border-r-2 border-customDarkBlue">
                Car Model
              </th>
              <th className="text-xl text-customDarkBlue font-black p-2 border-2 border-r-2 border-customDarkBlue">
                Orders
              </th>
              <th className="text-xl text-customDarkBlue font-black p-2 border-2 border-r-2 border-customDarkBlue">
              Estimated Time (Days)
              </th>
              <th className="text-xl text-customDarkBlue font-black p-2 border-2  border-customDarkBlue">
                Resource Deployed
              </th>
            </tr>
            {tasks?.map((task, i) => (
              <tr
                key={i}
                className="hover:text-xl hover:text-gray-600 hover:font-bold duration-100 cursor-pointer"
              >
                <td className="text-lg p-1 border-r-2 border-l-2 border-customDarkBlue">
                  {task?.name}
                </td>
                <td className="text-lg border-r-2 border-l-2 pl-2 border-customDarkBlue">
                  {task?.order}
                </td>
                <td className="text-lg border-r-2 border-l-2 pl-2 border-customDarkBlue">
                  {task?.time}
                </td>
                <td className="text-lg border-r-2 border-l-2 pl-2 border-customDarkBlue">
                  {task?.resource}
                </td>
              </tr>
            ))}
              <tr className="hover:text-xl hover:text-gray-600 hover:font-bold duration-100 cursor-pointer">
                <td className="text-lg p-1 border-b-2 border-l-2 border-customDarkBlue">
                Mazda CX-5
                </td>
                <td className="text-lg border-b-2 border-l-2 pl-2 border-customDarkBlue">
                  18
                </td>
                <td className="text-lg border-b-2 border-l-2 pl-2 border-customDarkBlue">
                  3
                </td>
                <td className="text-lg border-b-2 border-l-2 border-r-2 pl-2 border-customDarkBlue">
                  Dennis Ray
                </td>
              </tr>
          </table>
          </div>
        </Grid>
      </Container>
    </>
  );
};

export default index;