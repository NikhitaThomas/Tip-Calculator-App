import React from "react";

export default function CalcTotal({
  tipAmountPerPerson,
  totalAmountPerPerson,
  reset,
}) {
  return (
    <div className="m-4 p-8 bg-emerald-950 text-white rounded-lg basis-1/2">
      <div className="flex flex-col gap-5">
        <div className="flex flex-row justify-between p-2">
          <div>
            <div>Tip Amount</div>
            <div className="text-slate-600">/ person</div>
          </div>

          <div className="text-emerald-400 text-2xl font-bold">
            ${tipAmountPerPerson.toFixed(2)}
          </div>
        </div>
        <div className="flex justify-between p-2">
          <div>
            <div>Total</div>
            <div className="text-slate-600">/ person</div>
          </div>

          <div className="text-emerald-400 text-2xl font-bold">
            ${totalAmountPerPerson.toFixed(2)}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-32">
        <button
          className="w-4/5 py-2 bg-emerald-400 text-emerald-900 rounded-md font-semibold hover:bg-emerald-100"
          onClick={reset}
        >
          RESET
        </button>
      </div>
    </div>
  );
}
