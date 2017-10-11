function selScroll(obj) {

    var oS = document.getElementById("selScroll");
    var img = oS.getElementsByTagName("img");
    var all = document.createElement("div");
    all.className = "all";
    var screen = document.createElement("div");
    screen.className = "screen";
    var ul = document.createElement("ul");
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < img.length; i++) {
        var li = document.createElement("li");
        img[i].width = obj.width;
        img[i].height = obj.height;
        li.appendChild(img[i]);
        fragment.appendChild(li);
        console.log(li);
        i--;
    }
    ul.innerHTML = "";
    ul.appendChild(fragment);
    screen.appendChild(ul);
    var ol = document.createElement("ol");
    screen.appendChild(ol);
    var arr = document.createElement("div");
    arr.className = "arr";
    var left = document.createElement("span");
    left.className = "left";
    left.innerHTML = "<";
    var right = document.createElement("span");
    right.className = "right";
    right.innerHTML = ">";
    arr.appendChild(left);
    arr.appendChild(right);
    screen.appendChild(arr);
    all.appendChild(screen);
    oS.appendChild(all);


    setTransition(ul, "transform 1s");

    var ulLi = ul.getElementsByTagName("li");
//ol填充
    forEach(ulLi, function (e, i) {
        var li = document.createElement("li");
        li.innerHTML = i + 1;
        ol.appendChild(li);
    }, 1);
//li克隆
    ul.appendChild(ulLi[0].cloneNode(true));
//olLi事件
    var olLi = ol.getElementsByTagName("li");
    var oW = screen.offsetWidth;
    olLi[0].className = "current";
    forEach(olLi, function (e) {
        e.onclick = function () {
            if (square == this.index) {
                return
            }
            clear(olLi);
            this.className = "current";
            var target = -oW * this.index;
            animationCSS3(ul, target);
            key = square = this.index;
        }
    });

//right点击
    var key = 0;
    var square = 0;
    right.addEventListener("click", autoPlay);
//left点击
    left.addEventListener("click", function () {
        key--;
        square--;
        if (key == -1) {
            c(key);
            ul.removeAttribute("style");
            setTransform(ul, "translateX(" + (-2500) + "px)");
            key = ulLi.length - 2;

        }
        if (square == -1) {
            square = olLi.length - 1;
        }
        clear(olLi);
        olLi[square].className = "current";
        var target = -oW * key;
        setTimeout(function () {
            setTransition(ul, "transform 1s");
            animationCSS3(ul, target);
        }, 1)
    });
//autoplay
    if (obj.isAuto) {
        var timer = setInterval(autoPlay, obj.autoTime);
    }
    all.addEventListener("mouseenter", function () {
        clearInterval(timer);
        arr.style.display = "block";
    });
    all.addEventListener("mouseleave", function () {
        if (obj.isAuto) {
            timer = setInterval(autoPlay, obj.autoTime);
        }
        arr.removeAttribute("style");
    });

    /**
     *自动播放
     */
    function autoPlay() {
        key++;
        square++;
        if (key == ulLi.length) {
            ul.removeAttribute("style");
            setTransform(ul, "translateX(" + (0) + "px)");
            key = 1;
        }
        if (square == olLi.length) {
            square = 0;
        }
        clear(olLi);
        olLi[square].className = "current";
        var target = -oW * key;
        setTimeout(function () {
            setTransition(ul, "transform 1s");
            animationCSS3(ul, target);
        }, 1)
    }


    /**
     * className初始化
     * @param obj
     */
    function clear(obj) {
        forEach(obj, function (e) {
            e.className = "";
        })
    }

    /**
     * css3动画
     * @param ele
     * @param target
     */
    function animationCSS3(ele, target) {
        setTransform(ele, "translateX(" + target + "px)");
        setTimeout(function () {
            onOff = true;
        }, 1000);
    }

    /**
     * 设置transition
     * @param ele
     * @param attr
     */
    function setTransition(ele, attr) {
        ele.style.transition = attr;
        ele.style.mozTransition = "-moz-" + attr;
        ele.style.oTransition = "-o-" + attr;
        ele.style.webkitTransition = "-webkit-" + attr;
    }

    /**
     * 设置transform
     * @param ele
     * @param attr
     */
    function setTransform(ele, attr) {
        ele.style.transform = attr;
        ele.style.mozTransform = attr;
        ele.style.oTransform = attr;
        ele.style.webkitTransform = attr;
    }

    /**
     * 模拟forEach操作
     * @param obj
     * @param fn
     */
    function forEach(obj, fn) {
        for (var i = 0; i < obj.length; i++) {
            obj[i].index = i;
            fn(obj[i], obj[i].index, obj);
        }
    }
}

