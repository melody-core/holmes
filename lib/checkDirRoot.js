/*
 * @Author: 六弦
 * @LastEditors: 六弦
 * @Date: 2021-04-10 11:38:09
 * @LastEditTime: 2021-04-10 16:10:19
 */


module.exports = function checkDirRoot( proDir ){
    if(!Array.isArray(proDir)){
        throw new Error(`没有获取到项目根目录！`);
    }
    if(proDir.indexOf('package.json') === -1 ){
        throw new Error(`没有检测到package.json文件，请确认是否在项目目录！`)
    }
    return true;
}