const LANG_PACK = {
  'en-us': {
    items_per_page: '/Page',
    jump_to: 'Page',
    page: '',
    total: total => `Total ${total} items`,
    item: ' entries',
    pageNo: page => `Page ${page}`,
    ok: 'Go',
  },
  'zh-cn': {
    items_per_page: '条/页',
    jump_to: '跳至',
    page: '页',
    total: total => `共 ${total} 条`,
    item: '条',
    pageNo: page => `第 ${page} 页`,
    ok: '确定',
  },
  'zh-hk': {
    items_per_page: '條/頁',
    jump_to: '跳至',
    page: '頁',
    total: total => `共 ${total} 條`,
    item: '條',
    pageNo: page => `第 ${page} 頁`,
    ok: '確定',
  },
};
LANG_PACK.en = LANG_PACK['en-us'];
LANG_PACK['en_US'] = LANG_PACK['en-us'];
LANG_PACK['zh_CN'] = LANG_PACK['zh-cn'];

export default LANG_PACK;
