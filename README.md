<!--
 * @Author: 六弦
 * @LastEditors: 六弦
 * @Date: 2021-04-13 10:35:53
 * @LastEditTime: 2021-04-13 10:43:29
-->

# @melody-core/holmes
> 福尔摩斯！为您的项目提供安全扫描服务！
## 1作为命令行工具使用
安装
```shell
   yarn global add  @melody-core/holmes
   # 我们更期望您可以通过 melody来安装它。
   yarn global add @melody-core/melody-cli
   melody i @melody-core/holmes
```
使用
```shell
# 您可以在任意前端项目的根目录下运行
holmes check 
# 如果您使用了melody-cli，那么
melody holmes check

```


## 2作为依赖包使用
安装
```shell
   yarn add  @melody-core/holmes
```
使用
```node
   const PackageSafeWorker  = require('@melody-core/holmes');
   const packageSafeWorker = new PackageSafeWorker({
       proPath   //参数，要检测项目的绝对路径
   });
   const result = await PackageSafeWorker.run();
   console.log('项目依赖包安全检测结果：', result)
```