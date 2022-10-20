const HoursToSentence = (hours) => {
  let estimatedTime = "";
  let rest = 0;
  let workDays = 0;
  let workWeeks = 0;
  let workMonths = 0;
  let workHours = 0;
  let worked = [
    { name: "month", value: 0 },
    { name: "week", value: 0 },
    { name: "day", value: 0 },
    { name: "hour", value: 0 },
  ];

  const returnMonths = (hours) => {
    workMonths = Math.floor(hours / 200);

    rest = hours % 200;
    worked[0].value = workMonths;
    return [workMonths, rest];
  };

  const returnWeeks = (hours) => {
    workWeeks = Math.floor(hours / 40);
    worked[1].value = workWeeks;

    rest = hours % 40;

    return [workWeeks, rest];
  };
  const returnDays = (hours) => {
    workDays = Math.floor(hours / 8);
    worked[2].value = workDays;

    rest = hours % 8;

    return [workDays, rest];
  };

  const returnHours = (hours) => Math.ceil(hours);

  if (hours >= 200) {
    [workMonths, rest] = returnMonths(hours);
    [workWeeks, rest] = rest >= 40 ? returnWeeks(rest) : [null, rest];
    [workDays, rest] = rest >= 8 ? returnDays(rest) : [null, rest];
    workHours = returnHours(rest);
  } else {
    if (hours >= 40) {
      [workWeeks, rest] = returnWeeks(hours);
      [workDays, rest] = rest >= 8 ? returnDays(rest) : [null, rest];
      workHours = returnHours(rest);
    } else {
      if (hours >= 8) {
        [workWeeks, rest] = returnWeeks(hours);
        [workDays, rest] = rest >= 8 ? returnDays(rest) : [null, rest];
        workHours = returnHours(rest);
      } else {
        workHours = returnHours(hours);
      }
    }
  }
  worked[3].value = workHours;
  worked = worked.filter((periodWorked) => periodWorked.value > 0);

  const estimatedTimeCalculator = (worked) => {
    let length = worked.length - 1;
    let next = "";
    let sentence = "";

    worked.forEach((period, index) => {
      let name = period.value === 1 ? period.name : period.name + "s";

      next = worked[index + 1];
      if (!next || length === 0) {
        sentence += period.value + " " + name;
        return;
      }

      if (length - index === 1) {
        sentence += period.value + " " + name + " and ";
        return;
      }

      sentence += period.value + " " + name + ", ";
    });
    return sentence;
  };

  estimatedTime = estimatedTimeCalculator(worked);

  return estimatedTime;
};

export default HoursToSentence;
