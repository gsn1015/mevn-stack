import Vue from 'vue';

// 构造ajax请求参数
function getHttpArgs(api, data, options = {}) {
    const method = api.method.toLowerCase();
    let args = [api.url];

    if (['post', 'put', 'patch'].indexOf(method) !== -1) {
        args.push(data);
    } else {
        options.params = data;
    }
    let urlParams = api.url.search(/{id}/);
    if (urlParams !== -1) {
        if (!options.params) {
            setTimeout(function() {
                Vue.prototype.$Modal.confirm({
                    title: '错误',
                    content: '前端传参错误',
                });
            }, 500);
            return false;
        }
    }
    args.push(options);
    return args;
}

export default {
    /**
     * 根据接口配置，生成方法
     * @param {Array} apis
     */
    api(apis) {
        var result = {};
        apis.forEach((api) => {
            result[api.name] = (data, options) => {
                return Vue.http[api.method.toLowerCase()](...getHttpArgs(api, data, options))
                    .then((res) => {
                        return Promise.resolve(res.body);
                    }, (error) => {
                        console.log(error,"error");
                    });
            };
        });
        return result;
    }
};
