import React from "react";

export default function PersonDropdown({ args }) {
  function refresh() {
    window.location.reload();
  }

  return (
    <>
      <button
        id="dropdownHelperButton"
        data-dropdown-toggle="dropdownHelper"
        class="w-1/3 mr-8 text-white bg-gray-900  hover:bg-gray-700 mt-2 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        type="button"
      >
        <span className="w-full font-semibold text-base">Select Person</span>
        <svg
          class="ml-2 w-4 h-4"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div
        id="dropdownHelper"
        class="w-fit hidden z-10 duration-50 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
      >
        <ul
          class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownHelperButton"
        >
          {args?.map((instance, i) => (
            <li key={i}>
              <div class="flex justify-start items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600 space-x-5">
                <div class="h-full">
                  <input
                    onClick={refresh}
                    id="helper-radio-4"
                    name="helper-radio"
                    type="radio"
                    value=""
                    class="w-4 h-4 text-gray-600 bg-gray-100 rounded border-gray-300 focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                </div>
                <div class="ml-2 text-sm ">
                  <label
                    for="helper-checkbox-1"
                    class="font-medium text-gray-900 dark:text-gray-300 flex flex-col"
                  >
                    <div className="flex items-center">
                      <img
                        src={instance?.image}
                        alt="."
                        className="h-10 w-10 rounded-sm border-2 border-gray-400"
                      ></img>
                      <span className="text-start ml-2 font-bold text-lg">
                        {instance?.name}
                      </span>
                    </div>
                    <p
                      id="helper-checkbox-text-1"
                      class="p-1 text-xs text-start font-normal text-gray-500 dark:text-gray-300"
                    >
                      {instance?.desc}
                    </p>
                  </label>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
