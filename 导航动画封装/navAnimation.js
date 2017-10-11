function navAnimation() {
    var nav = document.getElementById("navMove");
    var span = document.createElement("span");
    var ul = nav.getElementsByTagName("ul")[0];
    nav.insertBefore(span,ul);
    var li = nav.getElementsByTagName("li");
    var oW = span.offsetWidth;
    var count = 0;
    forEach(li, function (e) {
        e.addEventListener("mouseenter", function () {
            animationCSS3(span, this.index * oW);
        });
        e.addEventListener("click", function () {
            count = this.index;
        })
    });
    nav.addEventListener("mouseout", function () {
        animationCSS3(span, count * oW);
    });

    /**
     *css3动画
     * @param ele
     * @param target
     */
    function animationCSS3(ele,target) {
        ele.style.transform = "translateX("+target+"px)";
        ele.style.mozTransform = "translateX("+target+"px)";
        ele.style.oTransform = "translateX("+target+"px)";
        ele.style.webkitTransform = "translateX("+target+"px)";
    }
    /**
     *FOREACH
     * @param obj
     * @param fn
     * @param start
     */
    function forEach(obj, fn, start) {
        if (start == undefined) {
            start = 0;
        }
        for (var i = start; i < obj.length; i++) {
            obj[i].index = i;
            fn(obj[i], i, obj);
        }
    }

}