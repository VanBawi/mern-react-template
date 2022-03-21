const numberRegex = /^\d+$/; // <- only number can exist

const checkNumber = (number, callback) => {
  if (!number) {
    console.error('no number in req.body');
    callback('Please fill in all the credentials input');
  } else if (
    numberRegex.test(number) &&
    number.length > 9 &&
    number.length < 12 &&
    number.substr(0, 2) === '01'
  ) {
    callback();
  } else {
    console.error('wrong number format : ', number);
    callback(
      "Please enter a valid phone number: Starts with '1', numeric value only and no separator in between"
    );
  }
};

const checkIc = (ic, callback) => {
  if (!ic) {
    console.error('no ic in req.body');
    callback('Please fill in all the credentials input');
  } else if (numberRegex.test(ic) && ic.length === 12) {
    callback();
  } else {
    console.error('wrong ic format : ', ic);
    callback('Please enter the correct IC Number format');
  }
};

module.exports = {
  checkNumber,
  checkIc,
};
