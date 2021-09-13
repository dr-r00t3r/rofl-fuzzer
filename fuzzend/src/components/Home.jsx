import MainPage from "./Feed/MainPage";
import React from "react";

function Home() {
  return (
    <React.Fragment>
      <div className="w3-container w3-center w3-black" style={{padding: "2rem"}}>
        <h1 className="w3-jumbo">ROFL-Fuzzer</h1>
        A Dom-fuzzing framework for Browsers
        </div>
        <MainPage />
    </React.Fragment>
  );
}

export default Home;