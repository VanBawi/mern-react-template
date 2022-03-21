/* eslint-disable no-console */
const AWS = require('aws-sdk');
require('dotenv').config();

const region = 'ap-southeast-1';
const accessKeyId = process.env.ACCESS_KEYID;
const secretAccessKey = process.env.SECRET_ACCESSKEY;
const bucketName = process.env.BUCKETNAME;
AWS.config.update({
  accessKeyId,
  secretAccessKey,
  region,
});

const s3 = new AWS.S3();
const uploadtos3 = (key, body, encoding, fileType, callback) => {
  console.log('test');
  const param = {
    Bucket: bucketName,
    Key: key,
    Body: body,
    ContentEncoding: encoding,
    ContentType: fileType,
  };

  s3.putObject(param, (err) => {
    if (err) {
      return callback('failed');
    }
    callback('success');
  });
};

const getSignedUrl = (key, callback) => {
  // 	console.log(key)
  // const s3 = new AWS.S3();
  const s3Param = {
    Bucket: bucketName,
    Key: key,
    Expires: 7200,
  };
  s3.getSignedUrl('getObject', s3Param, (err, url) => {
    if (err) {
      console.log('Error when get signed url in validations list : ');
      console.log(err);
      callback('failed');
    }
    callback('success', url);
  });
};

module.exports = {
  uploadtos3,
  getSignedUrl,
};
