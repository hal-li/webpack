/**
 * 参数序列化 key:value => &key=value
 * @param {object} data 参数
 * @return {string} 序列化参数字符串 eg: key1=value1&key2=value2
 * */
export function serialization(data) {
    let param = function(obj) {
        let query = '';
        let name, value, fullSubName, subName, subValue, innerObj, i;

        for (name in obj) {
            value = obj[name];

            if (value instanceof Array) {
                for (i = 0; i < value.length; ++i) {
                    subValue = value[i];
                    fullSubName = name + '[]' ; // + '[' + i + ']';
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    query += param(innerObj) + '&';
                }
            } else if (value instanceof Object) {
                for (subName in value) {
                    subValue = value[subName];
                    fullSubName = name + '[' + subName + ']';
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    query += param(innerObj) + '&';
                }
            } else if (value !== undefined && value !== null) {
                query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
            }
        }

        return query.length ? query.substr(0, query.length - 1) : query;
    };

    return data instanceof Object && String(data) !== '[object File]' ? param(data) : data;
}

/**
 * 参数字符串反序列化 &key=value => key:value
 * @param {string} param 参数字符串
 * @return {object} 参数对象
 * */
export function deserialize(param) {
    let obj = {};
    let reg = /([^?&]+)=([^?&]+)/g;
    param.replace(reg, function(str, key, value) {
        obj[ key ] = decodeURIComponent(value);
        return key + '=' +  value;
    });
    return obj;
}
