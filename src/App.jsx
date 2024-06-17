import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Main from "./components/Main";
import viteLogo from "/vite.svg";

function App() {
  return (
    <div className="">
      <div className="flex justify-center md:m-20 p-8">
        <img src="/images/logo.svg" />
      </div>
      <div className="">
        <Main />
      </div>
    </div>
  );
}

export default App;
