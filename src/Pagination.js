import React from 'react';
import RcPagination from 'rc-pagination';
import assign from 'object-assign';
import Select from 'uxcore-select2';

export default class Pagination extends RcPagination {
	constructor(props){
		super(props);
	}
}
Pagination.displayName = 'uxcore-pagination';
Pagination.propTypes = RcPagination.propTypes;
Pagination.defaultProps = assign(RcPagination.defaultProps, {
	prefixCls: 'kuma-pagination',
	selectPrefixCls: 'kuma-select',
	selectComponentClass: Select
});
