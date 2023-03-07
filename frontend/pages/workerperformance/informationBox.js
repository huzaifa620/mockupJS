import React from 'react';
import Gauge from 'pages/charts/gauge';

export default function InformationBox({ args }) {
  return (
    <div>
      <section class="h-fit pt-8">
        <div class="w-full">
          <div class=" flex  bg-white w-full mb-6  rounded-lg">
            <div>
              <div class="flex flex-col justify-center items-center">
                <div class="w-2/3  justify-center">
                  <div class="flex justify-center items-center h-11/12">
                    <img
                      alt="..."
                      src={args?.pic}
                      class="shadow-xl rounded-full h-11/12 align-middle border-none w-1/2"
                    ></img>
                  </div>
                </div>
                <div class="w-1/5 h-1/4 mt-5 flex-row justify-center items-center">
                  <div className="justify-center items-center text-center text-gray-800 font-semibold text-md flex flex-col">
                    <Gauge
                      className="flex items-center justify-center"
                      args={args?.performance}
                    />
                  </div>
                </div>
              </div>
              <div class="text-center  flex flex-col">
                <span class="text-3xl font-semibold leading-normal mb-1 text-gray-700">
                  {args?.name}
                </span>
                <div class="text-sm leading-normal mt-0 mb-2 text-gray-700 font-bold uppercase">
                  <i class="fas fa-map-marker-alt mr-2 text-xl text-gray-700"></i>
                  {args?.address}
                </div>
                <div class="w-full h-fit text-center items-center justify-center flex">
                  <div class="flex flex-wrap justify-center py-4 lg:pt-4 pt-8 w-11/12">
                    <div class="mr-4 p-3 text-center">
                      <span class="text-2xl font-bold block e tracking-wide text-gray-600">
                        {args?.designation}
                      </span>
                      <span class="text-md text-gray-400 ">Designation</span>
                    </div>
                    <div class="mr-4 p-3 text-center">
                      <span class="text-2xl font-bold block  tracking-wide text-gray-600">
                        {args?.totalJobs}
                      </span>
                      <span class="text-md text-gray-400">Jobs In 2022</span>
                    </div>
                    <div class="mr-4 p-3 text-center">
                      <span class="text-2xl font-bold block  tracking-wide text-gray-600">
                        {args?.best}
                      </span>
                      <span class="text-md text-gray-400">
                        Best Performance Model
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}