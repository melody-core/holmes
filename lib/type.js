/*
 * @Author: 六弦
 * @LastEditors: 六弦
 * @Date: 2021-04-10 15:54:21
 * @LastEditTime: 2021-04-10 17:23:26
 */

const LOCK_TYPES = ["YARN", "NPM","NO_TYPE"];
module.exports = [{
    type: LOCK_TYPES[0],
    sh: './../shells/package-safe-yarn.sh',
    cmd: 'yarn audit --json'
},{
    type: LOCK_TYPES[1],
    sh: './../shells/package-safe-npm.sh',
    cmd: 'npm audit --json'
},{
    type: LOCK_TYPES[2],
    sh: './../shells/package-safe-notype.sh'
}]