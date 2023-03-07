import PageTitle from "components/UiElements/PageTitle/PageTitle";
import React, { useEffect, useState } from "react";
import Calendar from "containers/Calendar";
import Container from "components/UiElements/Container/Container";
import { Grid } from "baseui/layout-grid";
import { Block } from "baseui/block";
import Head from "next/head";
import Bar from "containers/Calendar/bar";

const index = () => {
  const [state, setState] = useState({ events: [] });
  const [view, setView] = useState("month");
  const [date, setDate] = useState(new Date());
  const [jobs, setJobs] = useState(0);
  const [Allcar, setAllcar] = useState([]);
  const [rangeDate, setRangeDate] = useState([]);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const getNoJobs = () => {
    var events = state?.events;
    var today = date;
    var currentdate = today.getDate();
    var currentday = today.getDay();
    var newDate;
    var secondDate = null;
    if (currentday == 0) {
      newDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        currentdate + 6,
        23,
        59
      );
      secondDate = new Date(today.getFullYear(), today.getMonth(), currentdate);
    } else if (currentday == 1) {
      newDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        currentdate + 5,
        23,
        59
      );
      secondDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        currentdate - 1
      );
    } else if (currentday == 2) {
      newDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        currentdate + 4,
        23,
        59
      );
      secondDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        currentdate - 2
      );
    } else if (currentday == 3) {
      newDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        currentdate + 3,
        23,
        59
      );
      secondDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        currentdate - 3
      );
    } else if (currentday == 4) {
      newDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        currentdate + 2,
        23,
        59
      );
      secondDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        currentdate - 4
      );
    } else if (currentday == 5) {
      newDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        currentdate + 1,
        23,
        59
      );
      secondDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        currentdate - 5
      );
    } else if (currentday == 6) {
      newDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        currentdate,
        23,
        59
      );
      secondDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        currentdate - 6
      );
    }
    console.log("compariosn Date", secondDate, newDate);
    var totalJobs = events?.reduce((total, num) => {
      if (
        (new Date(num?.start) >= secondDate &&
          new Date(num?.start) <= newDate) ||
        (new Date(num?.end) <= newDate && new Date(num?.end) >= secondDate)
      ) {
        return (total += parseInt(num?.cars));
      } else {
        return total;
      }
    }, 0);
    var honda = events?.filter((item) => item?.model == "Honda");
    var nissan = events?.filter((item) => item?.model == "Nissan");
    var toyota = events?.filter((item) => item?.model == "Toyota");
    var hyundai = events?.filter((item) => item?.model == "Hyundai");
    var ford = events?.filter((item) => item?.model == "Ford Motors");
    var carshonda = [];
    var carsnis = [];
    var carstoy = [];
    var carshyu = [];
    var carsfro = [];
    var alldate = [];
    for (var i = 0; i < 7; i++) {
      var hon = honda?.filter((item) => {
        var date = new Date(item.start);
        var end = new Date(item.end);

        if (
          new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate()
          ).getTime() ==
            new Date(
              secondDate.getFullYear(),
              secondDate.getMonth(),
              secondDate.getDate() + i
            ).getTime() ||
          (new Date(
            end.getFullYear(),
            end.getMonth(),
            end.getDate()
          ).getTime() >=
            new Date(
              secondDate.getFullYear(),
              secondDate.getMonth(),
              secondDate.getDate() + i
            ).getTime() &&
            new Date(item.start) < newDate &&
            !(
              new Date(
                date.getFullYear(),
                date.getMonth(),
                date.getDate()
              ).getTime() >
              new Date(
                secondDate.getFullYear(),
                secondDate.getMonth(),
                secondDate.getDate() + i
              ).getTime()
            ))
        ) {
          return true;
        } else {
          return false;
        }
      });
      var nis = nissan?.filter((item) => {
        var date = new Date(item.start);
        var end = new Date(item.end);

        if (
          new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate()
          ).getTime() ==
            new Date(
              secondDate.getFullYear(),
              secondDate.getMonth(),
              secondDate.getDate() + i
            ).getTime() ||
          (new Date(
            end.getFullYear(),
            end.getMonth(),
            end.getDate()
          ).getTime() >=
            new Date(
              secondDate.getFullYear(),
              secondDate.getMonth(),
              secondDate.getDate() + i
            ).getTime() &&
            new Date(item.start) < newDate &&
            !(
              new Date(
                date.getFullYear(),
                date.getMonth(),
                date.getDate()
              ).getTime() >
              new Date(
                secondDate.getFullYear(),
                secondDate.getMonth(),
                secondDate.getDate() + i
              ).getTime()
            ))
        ) {
          return true;
        } else {
          return false;
        }
      });
      var toy = toyota?.filter((item) => {
        var date = new Date(item.start);
        var end = new Date(item.end);

        if (
          new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate()
          ).getTime() ==
            new Date(
              secondDate.getFullYear(),
              secondDate.getMonth(),
              secondDate.getDate() + i
            ).getTime() ||
          (new Date(
            end.getFullYear(),
            end.getMonth(),
            end.getDate()
          ).getTime() >=
            new Date(
              secondDate.getFullYear(),
              secondDate.getMonth(),
              secondDate.getDate() + i
            ).getTime() &&
            new Date(item.start) < newDate &&
            !(
              new Date(
                date.getFullYear(),
                date.getMonth(),
                date.getDate()
              ).getTime() >
              new Date(
                secondDate.getFullYear(),
                secondDate.getMonth(),
                secondDate.getDate() + i
              ).getTime()
            ))
        ) {
          return true;
        } else {
          return false;
        }
      });
      var hyu = hyundai?.filter((item) => {
        var date = new Date(item.start);
        var end = new Date(item.end);

        if (
          new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate()
          ).getTime() ==
            new Date(
              secondDate.getFullYear(),
              secondDate.getMonth(),
              secondDate.getDate() + i
            ).getTime() ||
          (new Date(
            end.getFullYear(),
            end.getMonth(),
            end.getDate()
          ).getTime() >=
            new Date(
              secondDate.getFullYear(),
              secondDate.getMonth(),
              secondDate.getDate() + i
            ).getTime() &&
            new Date(item.start) < newDate &&
            !(
              new Date(
                date.getFullYear(),
                date.getMonth(),
                date.getDate()
              ).getTime() >
              new Date(
                secondDate.getFullYear(),
                secondDate.getMonth(),
                secondDate.getDate() + i
              ).getTime()
            ))
        ) {
          return true;
        } else {
          return false;
        }
      });
      var fro = ford?.filter((item) => {
        var date = new Date(item.start);
        var end = new Date(item.end);

        if (
          new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate()
          ).getTime() ==
            new Date(
              secondDate.getFullYear(),
              secondDate.getMonth(),
              secondDate.getDate() + i
            ).getTime() ||
          (new Date(
            end.getFullYear(),
            end.getMonth(),
            end.getDate()
          ).getTime() >=
            new Date(
              secondDate.getFullYear(),
              secondDate.getMonth(),
              secondDate.getDate() + i
            ).getTime() &&
            new Date(item.start) < newDate &&
            !(
              new Date(
                date.getFullYear(),
                date.getMonth(),
                date.getDate()
              ).getTime() >
              new Date(
                secondDate.getFullYear(),
                secondDate.getMonth(),
                secondDate.getDate() + i
              ).getTime()
            ))
        ) {
          return true;
        } else {
          return false;
        }
      });
      if (hon.length > 0) {
        carshonda.push(
          getRandomInt(3, 6)
        );
      } else {
        carshonda.push(getRandomInt(3, 6));
      }
      if (nis.length > 0) {
        carsnis.push(getRandomInt(3, 6));
      } else {
        carsnis.push(getRandomInt(3, 6));
      }
      if (toy.length > 0) {
        carstoy.push(getRandomInt(3, 6));
      } else {
        carstoy.push(getRandomInt(3, 6));
      }
      if (hyu.length > 0) {
        carshyu.push(getRandomInt(3, 6));
      } else {
        carshyu.push(getRandomInt(3, 6));
      }
      if (fro.length > 0) {
        carsfro.push(getRandomInt(3, 6));
      } else {
        carsfro.push(getRandomInt(3, 6));
      }
      var curdate = new Date(
        secondDate.getFullYear(),
        secondDate.getMonth(),
        secondDate.getDate() + i
      );
      alldate.push(curdate.toDateString());
    }

    var aldata = [
      {
        name: "Sean Davidson",
        data: carsfro,
      },
      {
        name: "Dennis Ray",
        data: carshonda,
      },
      {
        name: "Gilbert Holland",
        data: carshyu,
      },
    ];

    setAllcar(aldata);
    setRangeDate(alldate);
    setJobs(totalJobs);
  };

  useEffect(() => {
    if (view == "week") {
      getNoJobs();
    }
  }, [view, date, state?.events]);

  return (
    <>
      <Head>
        <title>Dashboard | Workflow Optimizer</title>
      </Head>
      <PageTitle title={"WorkFlow Optimizer"} subtitle={""} />

      <Container>
        {view == "week" ? (
          <div className="flex items-center justify-center space-x-6">
            <div className="flex text-black items-center">
              <h3 className="text-xl text-black">WorkShop 1</h3>
              <div className=" h-3 w-3 bg-[#42dd60] border ml-2"></div>
            </div>
            <div className="flex text-black items-center">
              <h3 className="text-xl text-black">WorkShop 2</h3>
              <div className=" h-3 w-3 bg-[#3F51B5] border ml-2"></div>
            </div>
            <div className="flex text-black items-center">
              <h3 className="text-xl text-black">WorkShop 3</h3>
              <div className=" h-3 w-3 bg-[#f408a4] border ml-2"></div>
            </div>
            <div className="flex text-black items-center">
              <h3 className="text-xl text-black">WorkShop 4</h3>
              <div className=" h-3 w-3 bg-[#f47908] border ml-2"></div>
            </div>
          </div>
        ) : (
          ""
        )}
        <Block paddingTop={["0", "0", "0", "40px"]} className="w-full h-full">
          <Grid gridColumns={12} gridGutters={0} gridMargins={0} gridGaps={2}>
            <div className="flex flex-col items-center w-full h-full">
              <div className="flex  items-start mx-auto space-x-2 w-full h-full">
                
                <Block
                  paddingTop={["10px", "20px", "30px", "0"]}
                  minHeight="500px"
                  className={"mx-2 w-full !h-full"}
                  id="hamza"
                >
                  <Calendar
                    className="w-full !h-[700px]"
                    height={"700px"}
                    style={{ height: "700px" }}
                    view={view}
                    setView={setView}
                    state={state}
                    setState={setState}
                    date={date}
                    setDate={setDate}
                  />
                  {view == "week" ? (
                    <div className="flex w-full h-full flex-col justify-center items-center mt-4">
                      <h3 className="text-3xl text-bold text-gray-900 decoration-sky-500/30  subpixel-antialiased font-black">
                        Weekly Outlook
                      </h3>
                      <div className="text-2xl text-bold text-gray-800">
                        No. of Jobs this week:{" "}
                        <i className="font-black">{jobs}</i>
                      </div>
                      <div className="w-full ">
                        {Allcar.length > 0 && rangeDate.length > 0 ? (
                          <Bar args={Allcar} categories={rangeDate} />
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </Block>
              </div>
            </div>
          </Grid>
        </Block>
      </Container>
    </>
  );
};

export default index;
