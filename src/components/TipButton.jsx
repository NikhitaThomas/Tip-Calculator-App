import React from "react";

export default function TipButton(props) {
  const { tip, handleTipChange, tipAmount } = props;
  return (
    <div className="w-full">
      <button
        className={`${
          tip === tipAmount
            ? "bg-emerald-400 text-emerald-900"
            : "bg-emerald-950 text-white"
        } px-6 py-2 rounded-md w-full font-bold`}
        onClick={handleTipChange}
        value={tip}
      >
        {tip}%
      </button>
    </div>
  );
}
