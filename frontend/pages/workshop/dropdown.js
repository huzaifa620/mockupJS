import React from "react";

export default function DropdownComponent({ args }) {
  return (
    <div className="relative w-full lg:max-w-sm">
      <select className="w-full p-2.5 text-gray-700 font-bold bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
        {args?.map((val) => {
          return <option className="font-bold">{val}</option>;
        })}
      </select>
    </div>
  );
}
