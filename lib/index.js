/*
 * @Author: 六弦
 * @LastEditors: 六弦
 * @Date: 2021-04-10 11:26:54
 * @LastEditTime: 2021-04-10 17:34:02
 */


const getFileDirByPath = require('./getFileDirByPath');
const checkDirRoot = require('./checkDirRoot');
const getTypeByProDir = require('./getTypeByProDir');
const shellExec = require('./shellExec');


module.exports = {
    getFileDirByPath,
    checkDirRoot,
    getTypeByProDir,
    shellExec
}