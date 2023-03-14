# @bd/wcui
百搭WCUI组件库, 基于web components开发。面向下一代的UI组件库


### 开发环境

  + vscode  开源编辑器
    - `Prettier`插件, 格式化代码用
    - `string-html-css`, 可高亮显示js中的`html/css`文本, 并支持`emmet`
    - `simple http`, 可快速配置http服务器,支持history路由
    - ...

  + @bd/core  针对`web components`的核心封装库, 以数据驱动, 可以更方便的开发wc组件


### 测试预览

可以根目录放置一个http服务的配置文件`.httpserver`, 如下
```json
{
  "enabled": true,
  "port": 8090
}
```

然后, 创建个html文件, 如下, 即可右键打开预览了.

```html
<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
  <style></style>
</head>
<body>


  <wc-hello></wc-hello>  
  

  <script type="module" src="/test.js"></script>
</body>
</html>
```