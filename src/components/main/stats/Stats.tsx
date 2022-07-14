import { useSpendingContext } from "context/SpendingContext";
import React from "react";

const Stats = () => {
  const { spendingForMonth, previousMonthDifference } = useSpendingContext();
  return (
    <div className="stats-container">
      <h2 className="total-heading">Total this month</h2>
      <div className="amount-container">
        <div className="spending-value">{spendingForMonth}</div>
        <div className="prev-month-container">
          <span className="prev-month-value">
            {previousMonthDifference > 0 ? "+" : "-"}
            {previousMonthDifference * 100}%
          </span>
          <span className="prev-month-label">from last month</span>
        </div>
      </div>
    </div>
  );
};

export default Stats;
