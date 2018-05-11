/**
 * 缓存数据，页面交互
 * */
const LocalStorage = function(item){
    this.get = () => {
        return JSON.parse(localStorage.getItem(item));
    };

    this.set = (obj) => {
        localStorage.setItem(item, JSON.stringify(obj));
    };

    this.clear = () => {
        localStorage.removeItem(item);
    }
};

const SessionStorage = function (item) {
    this.get = () => {
        return JSON.parse(sessionStorage.getItem(item));
    };

    this.set = (obj) => {
        sessionStorage.setItem(item, JSON.stringify(obj));
    };

    this.clear = () => {
        sessionStorage.removeItem(item);
    }
};

export { LocalStorage, SessionStorage };
