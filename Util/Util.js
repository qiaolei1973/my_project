
//工具类
var Util = function () { };
Util.prototype = {
    getGuid: () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        })
    },
    getDate: (date) => {
        const _date = new Date(date);
        const _year = _date.getFullYear();
        const _month = _date.getMonth() + 1;
        let _day = _date.getDate();
        _day = _day < 10 ? '0' + _day : _day;
        return _year + '/' + _month + '/' + _day;
    },

    setCache: (name, data) => {
        if (sessionStorage) {
            return sessionStorage.setItem(name, JSON.stringify(data))
        }
        console.log('can not support sessionStorage!')
    },

    getCache: (name, target, targetVal) => {
        if (sessionStorage && name) {
            const data = JSON.parse(sessionStorage.getItem(name)),
                len = data.length
            if (target && targetVal) {
                for (let i = 0; i < len; i++) {
                    if (data[i][target] === targetVal) {
                        return data[i]
                    }
                    if (i + 1 === len && data[i][target] !== targetVal) {
                        return null
                    }
                }
            }
            return data
        }
        console.log('can not support sessionStorage!')
    },

    removeCache: (name) => {
        if (sessionStorage && name) {
            return sessionStorage.removeItem(name)
        }
        console.log('can not support sessionStorage!')
    }
}
module.exports = new Util();