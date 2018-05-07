/**
 * 缓存数据，页面交互
 * */
const LocalStorage = function(item){          // 定义一个本地存储的构造函数
    this.get = function () {                // 获取数据
        let data = JSON.parse(localStorage.getItem(item));
        if(!!data) {
            return data;
        }else {
            return JSON.parse(sessionStorage.getItem(item));
        }
    };
    this.set = function (obj) {
        localStorage.setItem(item, JSON.stringify(obj));
    };
    this.clear = function () {              // 删除数据
        localStorage.removeItem(item);
    }
};

const SessionStorage = function (item) {
    this.get = function () {                // 获取数据
        return JSON.parse(sessionStorage.getItem(item));
    };
    this.set = function (obj) {             // 存储数据
        // console.log(item, JSON.stringify(obj) );
        sessionStorage.setItem(item, JSON.stringify(obj));
    };
    this.clear = function () {              // 删除数据
        sessionStorage.removeItem(item);
    }
};

export { LocalStorage, SessionStorage };
