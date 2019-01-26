import apiUtil from './apiUtil';

const apis = [
    // 选中指标获取维度
    {
        name: 'login',
        url: `/mevn_stack/user/login/`,
        method: 'get'
    },

];

export default apiUtil.api(apis);
