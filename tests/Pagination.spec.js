import expect from 'expect.js';
import React from 'react';
import ReactDOM from 'react-dom';
import assign from 'object-assign';
import TestUtils, { Simulate } from 'react-addons-test-utils';
import { mount } from 'enzyme';
import Pagination from '../src';

function renderPageWithProps(pageProps) {
  const props = {
    total: 50,
    pageSize: 10,
    className: 'test-page',
    showTotal: true,
    showQuickJumper: true,
    showSizeChanger: true,
  };
  assign(props, pageProps);
  const wrapper = mount(<Pagination {...props} />);
  return wrapper;
}

describe('Pagination', () => {
  describe('render', () => {

    it('should render correctly', (done) => {
      const wrapper = renderPageWithProps();
      expect(wrapper.find('.test-page').length).to.be(1);
      done();
    });
  });

  describe('control', () => {
    const wrapper = renderPageWithProps({
      total: 500,
      pageSize: 10,
    });
    it('should set page correctly', (done) => {
      expect(wrapper.node.state.current).to.be(1);
      wrapper.node._handleChange(2)
      expect(wrapper.node.state.current).to.be(2);
      done();
      wrapper.node._next();
      expect(wrapper.node.state.current).to.be(3);
      wrapper.node._prev();
      expect(wrapper.node.state.current).to.be(2);
      wrapper.node._jumpNext();
      expect(wrapper.node.state.current).to.be(7);
      wrapper.node._jumpPrev();
      expect(wrapper.node.state.current).to.be(2);
      wrapper.node._handleChange(30);
      wrapper.node.options._changeSize(20);
      expect(wrapper.node.state.current).to.be(25);
      done();
    });
    it('should quick jumper work correctly', (done) => {
      const input = wrapper.find('.kuma-page-options-quick-jumper > input');
      input.node.value = 10;
      input.simulate('change')
      input.simulate('keyup', {
        keyCode: 13,
      });
      expect(wrapper.node.state.current).to.be(10);
      done();
    });

  });
  

});