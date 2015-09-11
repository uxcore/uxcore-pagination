# uxcore-pagination

- tags: uxcore, pagination
- description: uxcore pagination
- maintainers: vincent.bian
- version: 0.1.0
- lastupdate: 2015/9/11
- screenshots:

---

## TL;DR

#### setup develop environment

```sh
$ git clone https://github.com/uxcore/uxcore-pagination
$ cd uxcore-pagination
$ npm install
$ gulp server
```
nav http://localhost:9090/webpack-dev-server/example/ to see the demo

## Usage

```js
var Pagination = require('uxcore-pagination');
React.render(
	<Pagination onChange={onChange} total={50} />, document.getElementById('target'));
```

### demo
http://uxcore.github.io/uxcore-pagination/

## API

### props

|参数|说明|类型|默认值|
|---|----|---|------|
|current|当前页数|number|1|
|total|数据总数|number/jsx|0|
|pageSize|每页条数|number|10|
|onChange|页码改变的回调，参数是改变后的页码|function|noop|
|showSizeChanger|是否可以改变 pageSize|bool|false|
|showQuickJump|是否可以快速跳转至某页|bool|false|
|className|当为「mini」时，是小尺寸分页|string||
|simple|当添加该属性时，显示为简单分页|object||
