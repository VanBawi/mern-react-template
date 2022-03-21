require('dotenv').config();
const crypto = require('crypto');

// const algorithm = 'aes-256-ctr';
const ENCRYPTION_KEY = process.env.PASSCODE;
const IV_LENGTH = 16; // For AES, this is always 16

const encrypt = (text) => {
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv(
    'aes-256-cbc',
    Buffer.from(ENCRYPTION_KEY),
    iv
  );
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  const enCode = `${iv.toString('hex')}:${encrypted.toString('hex')}`;
  return enCode;
};

const decrypt = (text) => {
  const textParts = text.split(':');
  const iv = Buffer.from(textParts.shift(), 'hex');
  const encryptedText = Buffer.from(textParts.join(':'), 'hex');
  const decipher = crypto.createDecipheriv(
    'aes-256-cbc',
    Buffer.from(ENCRYPTION_KEY),
    iv
  );
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  const deCode = decrypted.toString();
  return deCode;
};

module.exports = {
  encrypt,
  decrypt,
};
