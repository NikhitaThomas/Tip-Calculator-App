import React from "react";
import { useState } from "react";
import Heading from "./Heading";

export default function People(props) {
  const { people, handleSetPeople } = props;

  return (
    <div className="">
      <Heading name={"Number of People"} />
      <div className="bg-gray-100 flex flex-row justify-between gap-4 rounded-lg">
        <div className="">
          <i className="fa-solid fa-user text-gray-500 flex justify-center items-center h-full px-2"></i>
        </div>
        <div className="">
          <input
            className={`${
              people === 0 ? "text-gray-400" : "text-emerald-950"
            } bg-gray-100 text-right focus:outline-none p-1 rounded-lg px-2 font-bold`}
            value={people}
            onChange={handleSetPeople}
          />
        </div>
      </div>
    </div>
  );
}
