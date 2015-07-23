# uxcore-tree
---

- tags: uxcore, tree
- description: uxcore tree
- maintainers: vincent.bian
- version: 0.1.0
- lastupdate: 2015/7/12
- screenshots:

## TL;DR

#### setup develop environment

```sh
$ git clone https://github.com/uxcore/uxcore-tree
$ cd uxcore-tree
$ npm install
$ npm run dev
```
nav http://localhost:9090/webpack-dev-server/example/ to see the demo

#### deploy to gh-pages
[refer to]( http://stackoverflow.com/questions/17643381/how-to-upload-my-angularjs-static-site-to-github-pages)
```sh
$ npm run build
$ git add build & git commit -m 'update deploy files'
$ npm run deploy
```

## Usage

```js
var tree = require('uxcore-tree');
React.render(
	<tree
		placement="top"
		trigger="hover"
		title={title}
		delay={0.1}
		<span>tree</span>
	</tree>, document.getElementById('target'));
```

### demo
http://uxcore.github.io/uxcore-tree/

## API

### props

|参数|说明|类型|默认值|
|---|----|---|------|
|placement|气泡框位置，可选 `top/left/right/bottom`|string|top|
|title|提示文字|string/jsx|无|
|trigger|触发方式，可选`hover/click`|string|hover|
|delay|延迟|number|0.1|
