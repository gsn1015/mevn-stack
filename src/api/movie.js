import apiUtil from './apiUtil';

const apis = [
    // 选中指标获取维度
    {
        name: 'getMovieList',
        url: `/mevn_stack/movie/list/`,
        method: 'get'
    },

];

export default apiUtil.api(apis);
