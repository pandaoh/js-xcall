!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((n="undefined"!=typeof globalThis?globalThis:n||self).xcall={})}(this,(function(n){"use strict";var e=function(){function n(){this._callBackMap={}}return n.getInstance=function(){return this.instance||(this.instance=new n),this.instance},n.hasCallBack=function(e,a){var t,c;return!!n.getInstance()._callBackMap[e]&&(null!==(c=null===(t=n.getInstance()._callBackMap[e])||void 0===t?void 0:t.includes(a))&&void 0!==c&&c)},n.existEvent=function(e){var a;return!!n.getInstance()._callBackMap[e]&&!!(null===(a=n.getInstance()._callBackMap[e])||void 0===a?void 0:a.length)},n.addCallBack=function(e,a){var t;n.getInstance()._callBackMap[e]||(n.getInstance()._callBackMap[e]=[]),n.hasCallBack(e,a)||null===(t=n.getInstance()._callBackMap[e])||void 0===t||t.push(a)},n.setOnceEvent=function(e,a){n.addCallBack(e,(function(){for(var t=[],c=0;c<arguments.length;c++)t[c]=arguments[c];null==a||a.apply(null,t),n.deleteEvent(e)}))},n.removeCallBack=function(e,a){var t;n.getInstance()._callBackMap[e]&&(n.getInstance()._callBackMap[e]=null===(t=n.getInstance()._callBackMap[e])||void 0===t?void 0:t.filter((function(n){return n!=a})),n.getInstance()._callBackMap[e].length||n.deleteEvent(e))},n.deleteEvent=function(e){n.getInstance()._callBackMap[e]&&Reflect.deleteProperty(n.getInstance()._callBackMap,e)},n.getCount=function(e){return e?n.getInstance()._callBackMap[e]?n.getInstance()._callBackMap[e].length:0:Object.keys(n.getInstance()._callBackMap).length},n.dispatch=function(e){for(var a=this,t=[],c=1;c<arguments.length;c++)t[c-1]=arguments[c];if(!n.getInstance()._callBackMap[e])throw new Error("未找到回调事件 ".concat(e," 的监听"));n.getInstance()._callBackMap[e].forEach((function(n){null==n||n.apply(a,t)}))},n}();n.XCall=e,n.default=e,Object.defineProperty(n,"__esModule",{value:!0})}));
