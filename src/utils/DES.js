import CryptoJS from 'crypto-js'

export default {
  MD5(str) {
    return str ? CryptoJS.MD5(str).toString() : ''
  },
  // 登录加密
  enCryption(data){
    // 两次MD5加密
    return this.MD5(this.MD5(data))
  },

  // 加密
  enDes(data){
    let key = 'KEY1';
    let iv = 'KEY2';
    key = CryptoJS.enc.Utf8.parse(key);
    iv = CryptoJS.enc.Utf8.parse(iv);
    let encrypted = CryptoJS.DES.encrypt(data, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
  },

  //解密
  deDES(data) {
    let key = 'KEY1'; //密钥
    let iv = 'KEY2';

    key = CryptoJS.enc.Utf8.parse(key);
    iv = CryptoJS.enc.Utf8.parse(iv);
    let decrypted = CryptoJS.DES.decrypt(data, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    return decrypted.toString(CryptoJS.enc.Utf8); //
  }
}
