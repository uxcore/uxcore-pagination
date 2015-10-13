import React from 'react';
import Pagination from '../src/index';

export default class Demo extends React.Component {
	render(){
		return (
			<div>
				<p>基础分页:</p>
				<Pagination showSizeChanger={true} onChange={onChange} total={50} pageSize={8} />
				<p>更多分页:</p>
				<Pagination onChange={onChange} total={500} />
				<p>快速跳转到某一页:</p>
				<Pagination showQuickJumper={true} onChange={onChange} total={500} />
				<p>迷你版本:</p>
				<Pagination className="mini" showQuickJumper={true} onChange={onChange} total={50} showSizeChanger={true} />
				<p>简单地翻页:</p>
				<Pagination simple onChange={onChange} total={50} />
			</div>
		);
	}
}

function onChange(key){
	console.log(key);
}
