const getArmyPercentage = () => {
  return Math.min(
    Number.MAX_SAFE_INTEGER,
    ((+new Date() - +new Date("2020-09-11T00:00:00+09:00")) /
      (+new Date("2022-08-10T00:00:00+09:00") -
        +new Date("2020-09-11T00:00:00+09:00"))) *
      100
  ).toFixed(7);
};

window.setInterval(() => {
  const percentage = getArmyPercentage();
  document.querySelector(".army-progress").value = Math.min(100, percentage);
  document.querySelector(".army-progress-caption").innerText = `${percentage}%`;
}, 20);
