import React from "react";
import { useState } from "react";
import Heading from "./Heading";

export default function Input({
  billAmount,
  setBillAmount,
  handleInputChange,
}) {
  return (
    <div className="">
      <Heading name={"Bill"} />
      <div className="bg-gray-100 flex flex-row justify-between gap-4 rounded-md">
        <div className="">
          <i className="fa-solid fa-dollar-sign text-gray-500 flex justify-center items-center h-full px-2"></i>
        </div>
        <div className="">
          <input
            className={`${
              billAmount === 0 ? "text-gray-400" : "text-emerald-950"
            } bg-gray-100 text-right focus:outline-none p-1 rounded-md px-3 font-bold`}
            value={billAmount}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
}
