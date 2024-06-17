import React, { useState } from "react";
import { useEffect } from "react";
import CalcTotal from "./CalcTotal";
import Heading from "./Heading";
import Input from "./Input";
import People from "./People";
import TipButton from "./TipButton";

export default function Main() {
  const [billAmount, setBillAmount] = useState(0);
  const [tipAmount, setTipAmount] = useState(null);
  const [people, setPeople] = useState(0);
  const [tipAmountPerPerson, setTipAmountPerPerson] = useState(0);
  const [totalAmountPerPerson, setTotalAmountPerPerson] = useState(0);

  function handleInputChange(e) {
    setBillAmount(e.target.value);
  }

  function handleTipChange(e) {
    setTipAmount(parseInt(e.target.value));
  }

  function handleSetPeople(e) {
    setPeople(e.target.value);
  }

  function calcTipAmount() {
    if (billAmount && tipAmount && people) {
      let totalTip = parseFloat(billAmount * (tipAmount / 100));
      let tipPerPerson = totalTip / people;
      setTipAmountPerPerson(tipPerPerson);
      let totalPerPerson = (totalTip + parseFloat(billAmount)) / people;
      setTotalAmountPerPerson(totalPerPerson);
    } else {
      setTipAmountPerPerson(0); // Reset to 0 if conditions are not met
      setTotalAmountPerPerson(0);
    }
  }

  function reset() {
    setBillAmount(0);
    setTipAmount(0);
    setPeople(0);
    tipAmountPerPerson(0);
    totalAmountPerPerson(0);
  }

  useEffect(() => {
    calcTipAmount();
  }, [billAmount, tipAmount, people]);

  return (
    <div className="md:flex flex-row md:p-8 justify-center bg-white rounded-2xl md:m-auto gap-4 h-max align-middle md:w-3/4 sm:m-0 sm:w-full">
      <div className="rounded-lg p-4 basis-1/2">
        <Input
          billAmount={billAmount}
          setBillAmount={setBillAmount}
          handleInputChange={handleInputChange}
        />
        <div className="grid gap-4 py-7">
          <Heading name={"Select Tip %"} />
          <div className="grid grid-cols-3 gap-4">
            <TipButton
              tip={5}
              tipAmount={tipAmount}
              handleTipChange={handleTipChange}
            />
            <TipButton
              tip={10}
              tipAmount={tipAmount}
              handleTipChange={handleTipChange}
            />
            <TipButton
              tip={15}
              tipAmount={tipAmount}
              handleTipChange={handleTipChange}
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <TipButton
              tip={25}
              tipAmount={tipAmount}
              handleTipChange={handleTipChange}
            />
            <TipButton
              tip={50}
              tipAmount={tipAmount}
              handleTipChange={handleTipChange}
            />
          </div>
        </div>
        <People handleSetPeople={handleSetPeople} people={people} />
      </div>
      <CalcTotal
        tipAmountPerPerson={tipAmountPerPerson}
        totalAmountPerPerson={totalAmountPerPerson}
        reset={reset}
      />
    </div>
  );
}
