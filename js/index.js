const getDdayPercentage = (dDayStartDate, dDayEndDate) => {
  return Math.min(
    Number.MAX_SAFE_INTEGER,
    ((+new Date() - Number(dDayStartDate)) /
      (Number(dDayEndDate) - Number(dDayStartDate))) *
      100
  ).toFixed(8);
};

// 2022-08-10T00:00:00+09:00
// new Date("2020-09-11T00:00:00+09:00")

window.setInterval(() => {
  const percentage = getDdayPercentage(
    new Date("2018-03-02T00:00:00+09:00"),
    new Date("2025-03-01T00:00:00+09:00")
  );
  document.querySelector(".dday").title = "Graduation Counter";
  document.querySelector(".dday-progress").value = Math.min(100, percentage);
  document.querySelector(".dday-progress-caption").innerText = `${percentage}%`;
}, 20);
