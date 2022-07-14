import Chart from "./chart/Chart";
import React from "react";
import Stats from "./stats/Stats";

const Main = () => {
  return (
    <main>
      <h1 className="spending-heading">Spending - Last 7 days</h1>
      <Chart />
      <hr />
      <Stats />
    </main>
  );
};

export default Main;
