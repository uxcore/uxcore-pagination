/* eslint no-console: "off" */
import React from 'react';
import Pagination from '../src/index';
import UxcoreConfigProvider from 'uxcore-config-provider';

function onChange(key) {
  console.log(key);
}

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 1,
    };
  }

  handleChange(page) {
    console.log(page);
    this.setState({
      index: page,
    });
  }

  render() {
    const me = this;
    return (
      <UxcoreConfigProvider localePack={
        {
          Pagination: {
            // items_per_page: '条/页（自定义文案）',
            // jump_to: '跳至（自定义文案）',
            // page: '页（自定义文案）',
            // total: total => `共 ${total} 条（自定义文案）`,
            // item: '条（自定义文案）',
            // pageNo: page => `第 ${page} 页（自定义文案）`,
            // ok: '确定（自定义文案）',
          }
        }
      }>
        <div>
        <h2>基础分页:</h2>
        <Pagination
          showSizeChanger
          onChange={onChange}
          showQuickJumper
          total={50.9}
          pageSize={8}
          pageShowCount={6}
          locale="zh-hk"
          getSelectPopupContainer={() => {
            const div = document.createElement('div');
            div.className = 'uxcore';
            document.body.appendChild(div);
            return div;
          }}
        />
        <h2>更多分页:</h2>
        <Pagination onChange={onChange} total={500} showTotal locale="en-us" />
        <h2>快速跳转到某一页:</h2>
        <Pagination showQuickJumper showTotal onChange={onChange} total={500000} locale="zh-hk"/>
        <h2>迷你版本:</h2>
        <Pagination className="mini" current={this.state.index} showTotal showQuickJumper onChange={me.handleChange.bind(me)} total={5000} sizeOptions={[5, 10, 20]} pageSize={5} showSizeChanger />
        <h2>简单地翻页:</h2>
        <Pagination simple onChange={me.handleChange.bind(me)} total={50} pageSize={1} />
        <h2>总数未知</h2>
        <Pagination simple onChange={me.handleChange.bind(me)} pageSize={1} />
        </div>
      </UxcoreConfigProvider>
    );
  }
}

