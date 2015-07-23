import '../style/kuma/src/less/kuma.less';
import React from 'react';
import Pagination from '../index.js';

React.render(
	<div>
		<p>基础分页:</p>
		<Pagination onChange={onChange} total={50} />
		<p>更多分页:</p>
		<Pagination onChange={onChange} total={500} />
		<p>快速跳转到某一页:</p>
		<Pagination showQuickJumper={true} onChange={onChange} total={500} />
		<p>迷你版本:</p>
		<Pagination className="mini" onChange={onChange} total={50} />
		<p>简单地翻页:</p>
		<Pagination simple onChange={onChange} total={50} />
	</div>,
	document.getElementById('content')
);

function onChange(key){
	console.log(key);
}
