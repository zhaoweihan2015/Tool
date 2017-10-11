/**
 * 对象增加console.log输出方法
 * @type {Object.c}
 */
Array.prototype.c = Number.prototype.c = String.prototype.c = Object.prototype.c = function (obj) {
    if (obj) {
        console.log(this.valueOf() + obj);
    } else {
        console.log(this.valueOf());
    }
};
/**
 * 对象增加alert展示方法
 * @type {Object.a}
 */
Array.prototype.a = Number.prototype.a = String.prototype.a = Object.prototype.a = function (obj) {
    if (obj) {
        alert(this.valueOf() + obj);
    } else {
        alert(this.valueOf());
    }
};
/**
 * 字符串文本输出
 */
String.prototype.w = function () {
    document.write(this.valueOf());
};
/**
 * console.log输出方法
 * @param obj
 */
function c(obj) {
    console.log(obj);
}

/**
 * alert显示方法
 * @param obj
 */
function a(obj) {
    alert(obj);
}

/**
 * 模拟forEach操作
 * @param obj
 * @param fn
 */
function forEach(obj,fn,start){
    if(start == undefined){
        start = 0;
    }
    for(var i = start;i<obj.length;i++){
        obj[i].index = i;
        fn(obj[i],i,obj);
    }
}