import { useSpendingContext } from "context/SpendingContext";
import React from "react";

const Chart = () => {
  // 227.94
  const { dailySpendingForWeek } = useSpendingContext();
  const weeklyTotal = dailySpendingForWeek.reduce(
    (acc, curr) => acc + curr.amount,
    0
  );
  const maxDay = dailySpendingForWeek.reduce(
    (acc, curr) => (curr.amount > acc.amount ? curr : acc),
    dailySpendingForWeek[0]
  );
  const maxDayAmount = maxDay.amount;
  const maxBarSize = 15;
  const today = new Date()
    .toLocaleDateString("en-US", {
      weekday: "short",
    })
    .toLowerCase();

  return (
    <div className="chart">
      {dailySpendingForWeek.map((day, index) => {
        // const dayContainerName = `${day.day}-container`
        // const height = `${day.amount / weeklyTotal * 100}%`
        return (
          <div
            key={index}
            className={`${day.day} chart--day-container`}
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            <div className="chart--day-bar-container group">
              <div className="chart--day-amount-hover group-hover:flex">
                ${day.amount}
              </div>
              <div
                className={`chart--day-bar ${
                  day.day === today
                    ? "bg-cyan group-hover:bg-pale-cyan"
                    : "bg-soft-red group-hover:bg-pale-soft-red"
                }`}
                style={{
                  height: `${(day.amount / maxDayAmount) * maxBarSize}rem`,
                  // transition: "height 0.2s ease-in-out",
                  // transitionDelay: `${index * 0.1}s`,
                  animationDelay: `${1 + index * 0.1}s`,
                }}
              >
                &nbsp;
              </div>
            </div>
            <div className="chart--day-label">{day.day}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Chart;
