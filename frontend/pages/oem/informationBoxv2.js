import React from "react";
// import image from "../static/image.jpg";
// import GaugeChart from "react-gauge-chart";
import LineChartv2 from "./lineChartv2";
import Gauge from "pages/charts/gauge";
import { useState, useEffect } from "react";

const useTypewriter = (text) => {
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      setCurrentText(text.substring(0, i));
      i++;
      if (i > text.length) {
        clearInterval(intervalId);
      }
    }, 50);
    return () => {
      clearInterval(intervalId);
    };
  }, [text]);

  return currentText;
};

export default function InformationBox() {
  const text = useTypewriter(
    "Hi Sam Davidson, you are doing a great job except that you have misplaced the measuring mat at the roof of the car, please take great care of it, thanks."
  );
  return (
    <div>
      <section class="bg-blueGray-50 h-fit">
        <div class="w-full">
          <div class=" flex  bg-white w-full mb-6  rounded-lg">
            <div>
              <div class="flex flex-col justify-center items-center">
                <div class="w-2/3  justify-center">
                  <div class="flex justify-center items-center">
                    <img
                      alt="..."
                      src="/images/image.jpg"
                      class="shadow-xl rounded-full h-11/12 align-middle border-none w-1/2"
                    ></img>
                  </div>
                </div>
                <div class="w-1/3 h-1/3 mt-5 flex-row justify-center items-center">
                  <div className="justify-center items-center text-center text-gray-800 font-semibold text-sm flex flex-col">
                    <Gauge
                      className="flex items-center justify-center"
                      args={0.92}
                    />
                    {/* <div className="justify-center items-center text-center font-semibold text-gray-600 flex-col flex">
                    <GaugeChart
                      className="flex items-center justify-center"
                      colors={["#4B5563"]}
                      percent={0.87}
                      nrOfLevels={1}
                      textColor="none"
                      needleBaseColor="#4B5563"
                      needleColor="#4B5563"
                      cornerRadius={20}
                      fontSize={17}
                      arcWidth={0.25}
                      arcPadding={0}
                    />
                    <span className="-mt-1 ml-[2.2px] -pt-4 leading-none">
                      87%
                      <br />
                    </span>
                    Performance
                  </div> */}
                  </div>
                </div>
              </div>
              <div class="text-center  flex flex-col items-center justify-center">
                <span class="text-2xl font-semibold leading-normal mb-1 text-blueGray-700">
                  Sam Davidson
                </span>
                <div class="text-sm leading-normal mt-0 mb-2 text-gray-800 font-bold uppercase">
                  <i class="fas fa-map-marker-alt mr-2 text-lg text-gray-800"></i>
                  1883 Venture Place, Alberta
                </div>
                <div class="w-full h-fit text-center items-center justify-center flex">
                  <div class="flex flex-col justify-center py-4 lg:pt-2 pt-4 w-11/12">
                    <div class="mr-4 p-3 text-center">
                      <span class="text-xl font-bold block e tracking-wide text-gray-600">
                        Senior Technician
                      </span>
                      <span class="text-sm text-gray-400">Designation</span>
                    </div>
                    <div class="mr-4 p-3 text-center">
                      <span class="text-xl font-bold block  tracking-wide text-gray-600">
                        579
                      </span>
                      <span class="text-sm text-gray-400">Jobs In 2022</span>
                    </div>
                    <div class="mr-4 p-3 text-center">
                      <span class="text-xl font-bold block  tracking-wide text-gray-600">
                        Ford F-150
                      </span>
                      <span class="text-sm text-gray-400">
                        Best Performance Model
                      </span>
                    </div>
                    <div class="mr-4 p-3 text-center">
                      <span class="text-xl font-bold block  tracking-wide text-gray-600">
                        95%
                      </span>
                      <span class="text-sm text-gray-400">
                        Score for Current Job
                      </span>
                    </div>
                    <div className=" h-fit">
                      <LineChartv2 />
                    </div>
                  </div>
                </div>
                <div class="w-5/6 h-fit text-center items-center justify-center flex flex-col border-l-2 border-black pl-2 ">
                  <span className="text-xl font-black">Feedback</span>
                  <span className="text-lg">{text}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

{
  /* <div>
<div className=" rounded border-gray-600 h-full w-full flex flex-col items-center">
  <div className="  mt-20 m-4 w-1/2 h-1/5 ">
    <img src={image}></img>
  </div>
  <ul className=" m-2 p-2  w-11/12 h-4/5">
    <li className="p-1 m-2 h-fit">
      <label className="text-xl  ">
        <span className="font-semibold">&#187; Name:</span> Peter
      </label>
    </li>
    <li className="p-1 m-2 h-fit ">
      <label className="text-xl  ">
        <span className="font-semibold">&#187; Designation: </span>ML
        Engineer
      </label>
    </li>
    <li className="p-1 m-2 h-fit ">
      <label className="text-xl  ">
        <span className="font-semibold">&#187; Domain: </span>Technical
      </label>
    </li>
    <li className="p-1 m-2 h-fit ">
      <label className="text-xl  ">
        <span className="font-semibold">&#187; Salary: </span>$5000
      </label>
    </li>
    <li className="p-1 m-2 h-fit ">
      <label className="text-xl  ">
        <span className="font-semibold">&#187; Job: </span>Remote
      </label>
    </li>
    <li className="p-1 m-2 h-fit ">
      <label className="text-xl  ">
        <span className="font-semibold">&#187; Country: </span>Pakistan
      </label>
    </li>
    <li className="p-1 m-2 h-fit ">
      <label className="text-xl  ">
        <span className="font-semibold">&#187; Performance: </span>9.8
      </label>
    </li>
  </ul>
</div>
</div> */
}
