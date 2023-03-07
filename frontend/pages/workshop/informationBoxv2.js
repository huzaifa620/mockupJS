import React from 'react';
import LineChartv2 from './lineChartv2';
import { useState, useEffect } from 'react';

const useTypewriter = (text) => {
  const [currentText, setCurrentText] = useState('');

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
    'Hi Sam Davidson, you are doing a great job except that you have misplaced the measuring mat at the roof of the car, please take great care of it, thanks.'
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
              </div>
              <div class="text-center  flex flex-col items-center justify-center">
                <span class="text-2xl font-semibold leading-normal mb-1 text-blueGray-700">
                  Sean Davidson
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
                        Historical Score for Current Vehicle Model
                      </span>
                    </div>
                    <div className="w-full h-fit flex items-center flex-col">
                      <LineChartv2 />
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