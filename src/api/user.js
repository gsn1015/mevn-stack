import apiUtil from './apiUtil';

const apis = [
    // 选中指标获取维度
    {
        name: 'login',
        url: `/mevn_stack/user/login/`,
        method: 'post'
    },
    {
        name: 'register',
        url: `/mevn_stack/user/register/`,
        method: 'post'
    },

];

export default apiUtil.api(apis);
