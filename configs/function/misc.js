const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const diff_weeks = (dt2, dt1) => {
  let diff = (dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60 * 60 * 24 * 7;
  return Math.abs(Math.round(diff));
};

const diff_days = (dt1, dt2) => {
  const Difference_In_Time = Math.abs(dt2.getTime() - dt1.getTime());

  // To calculate the no. of days between two dates
  const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  return Difference_In_Days;
};

const makeid = (length) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const getDaysInMonth = (month, year) =>
  // Here January is 1 based
  //Day 0 is the last day in the previous month
  new Date(year, month, 0).getDate();
// Here January is 0 based
// return new Date(year, month+1, 0).getDate();
const monthNameToNum = (monthname) => {
  const month = months.indexOf(monthname);
  console.log(month);
  return month + 1;
};

module.exports = {
  diff_weeks,
  diff_days,
  makeid,
  getDaysInMonth,
  monthNameToNum,
};
