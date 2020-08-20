/*
 * @Descripttion: 
 * @version: 
 * @Author: wangjunwei
 * @Date: 2020-07-28 00:45:21
 * @LastEditors: wangjunwei
 * @LastEditTime: 2020-08-20 23:12:38
 */

import {
  FileBox,
}             from 'wechaty-puppet'

export const CHATIE_OFFICIAL_ACCOUNT_QRCODE = 'http://weixin.qq.com/r/qymXj7DEO_1ErfTs93y5'

export function qrCodeForChatie (): FileBox {
  return FileBox.fromQRCode(CHATIE_OFFICIAL_ACCOUNT_QRCODE)
}
export const config = {
  host: '192.168.31.50',
  port: 3000,
}
export { VERSION } from './version'