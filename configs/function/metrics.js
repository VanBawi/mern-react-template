const Metric = require('../models/metric');

const createMetric = (channel, name, value, id, callback) => {
  const newMetric = {
    channel,
    name,
    value,
    id,
  };
  if (name != 'Sales') {
    Metric.findOne({ name, id }, (err, mtrc) => {
      if (err) {
        console.log(err);
        callback(err);
      } else if (mtrc) {
        callback(null, mtrc);
      } else {
        Metric.create(newMetric, (err, created) => {
          if (err) {
            callback(err);
          } else {
            console.log(created);
            callback(null, created);
          }
        });
      }
    });
  } else {
    Metric.create(newMetric, (err, created) => {
      if (err) {
        callback(err);
      } else {
        console.log(created);
        callback(null, created);
      }
    });
  }
};

module.exports = {
  createMetric,
};
