import * as crypto from 'crypto';

export async function cipher(buf: any) {
  var encrypted = '';
  var cip = crypto.createCipheriv('aes-128-cbc', 'aliyun-ros-devel', 'abcdefg123456789');
  encrypted += cip.update(buf, 'binary', 'hex');
  encrypted += cip.final('hex');
  return encrypted;
}

export async function decipher(encrypted: any) {
  var decrypted = '';
  var decipher = crypto.createDecipheriv('aes-128-cbc', 'aliyun-ros-devel', 'abcdefg123456789');
  decrypted += decipher.update(encrypted, 'hex', 'binary');
  decrypted += decipher.final('binary');
  return decrypted.toString();
}
