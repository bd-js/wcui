
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
  <link rel="stylesheet" href="/dist/css/reset-basic.css">
  <script async src="//jscdn.ink/es-module-shims/1.6.3/es-module-shims.wasm.js"></script>
  <script type="importmap">{"imports":{"es.shim":"//jscdn.ink/es.shim/2.1.1/index.js","vue":"//jscdn.ink/vue/3.2.47/vue.runtime.esm-browser.prod.js","vue-router":"//jscdn.ink/@bytedo/vue-router/4.1.6/vue-router.js","fetch":"//jscdn.ink/@bytedo/fetch/2.1.5/next.js","@bd/core":"//jscdn.ink/@bd/core/1.2.0/index.js"}}</script>
  <style></style>
</head>
<body>


  <wc-hello></wc-hello>  
  

  <script type="module" src="/test.js"></script>
</body>
</html>
```

test.js
```js
import '/dist/hello/index.js'

```