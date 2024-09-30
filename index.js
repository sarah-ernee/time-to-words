// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  // TODO: real code goes here!
  if (time === "0:00") {
    return "midnight";
  }

  if (time === "12:00") {
    return "midday";
  }

  // check minute portion > 30 or < 30
  let splitTime = time.split(":");
  let minutes = parseInt(splitTime[1]);
  let hour = parseInt(splitTime[0]);

  // Init reference dict
  let numToString = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "quarter",
    30: "half",
  };

  // Handle the case that returns remaining portion of minutes
  if (minutes > 30) {
    let remainingMin = 60 - minutes;
    let newHour = hour + 1;

    return `${numToString[remainingMin]} to ${numToString[newHour]}`;
  } else {
    return `${numToString[minutes]} past ${numToString[hour]}`;
  }
}

module.exports = { convertTimeToWords };
