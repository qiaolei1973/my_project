
//工具类
var Util = function(){};
Util.prototype = {
    getGuid: () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        })
    },
    getDate:(date)=>{
        const _date = new Date(date);
        const _year = _date.getFullYear();
        const _month = _date.getMonth() + 1;
        let _day = _date.getDate();
        _day = _day < 10 ? '0' + _day : _day;
        return _year + '/' + _month + '/' +  _day;
    }
}
module.exports = new Util();