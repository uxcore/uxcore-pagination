import React from 'react';
import Button from 'uxcore-button';
import KEYCODE from './KeyCode';
import i18n from './locale';

class Options extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      current: props.current,
    };

    ['_handleChange', '_changeSize', '_go', 'handleButtonClick'].forEach((method) => {
      this[method] = this[method].bind(this);
      return null;
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      current: nextProps.current,
    });
  }

  handleButtonClick() {
    this._go({
      target: {
        value: this.state.current,
      },
      keyCode: KEYCODE.ENTER,
    });
  }


  _changeSize(value) {
    this.props.changeSize(Number(value));
  }

  _handleChange(evt) {
    const _val = evt.target.value;

    this.setState({
      current: _val,
    });
  }

  _go(e) {
    let _val = e.target.value;
    if (_val === '') {
      return;
    }
    _val = Number(_val);
    if (isNaN(_val)) {
      return;
    }
    if (e.keyCode === KEYCODE.ENTER) {
      const c = this.props.quickGo(_val);
      this.setState({
        current: c,
      });
    }
  }

  render() {
    const props = this.props;
    const state = this.state;
    const prefixCls = `${props.rootPrefixCls}-options`;
    const sizeOptions = props.sizeOptions;
    const pageSize = props.pageSize;
    const changeSize = props.changeSize;
    const quickGo = props.quickGo;
    const Select = props.selectComponentClass;
    let changeSelect = null;
    let goInput = null;

    if (!(changeSize || quickGo)) {
      return null;
    }

    if (changeSize && Select) {
      const Option = Select.Option;
      changeSelect = (
        <Select
          prefixCls={props.selectPrefixCls}
          showSearch={false}
          className={`${prefixCls}-size-changer`}
          getPopupContainer={props.getPopupContainer}
          optionLabelProp="children"
          dropdownClassName={`${prefixCls}-size-changer-dropdown`}
          defaultValue={sizeOptions.indexOf(pageSize) === -1 ? `${sizeOptions[0]}` : `${pageSize}`}
          onChange={this._changeSize}
        >
          {sizeOptions.map(option => (
            <Option key={option} value={`${option}`}>{option + i18n[props.locale].items_per_page}</Option>
          ))}
        </Select>
      );
    }

    if (quickGo) {
      goInput = (
        <div title="Quick jump to page" className={`${prefixCls}-quick-jumper`}>
          {i18n[props.locale].jump_to}
          <input
            type="text"
            className="kuma-input"
            value={state.current}
            onChange={this._handleChange.bind(this)}
            onKeyUp={this._go.bind(this)}
          />
          {i18n[props.locale].page}
          <Button
            type="secondary"
            size="small"
            className={`${prefixCls}-quick-jumper-button`}
            onClick={this.handleButtonClick}
          >{i18n[props.locale].ok}</Button>
        </div>
      );
    }

    return (
      <div className={`${prefixCls}`}>
        {changeSelect}
        {goInput}
      </div>
    );
  }
}

/* eslint-disable react/require-default-props */
Options.propTypes = {
  changeSize: React.PropTypes.func,
  quickGo: React.PropTypes.func,
  selectComponentClass: React.PropTypes.func,
  current: React.PropTypes.number,
};
/* eslint-enable react/require-default-props */

export default Options;
