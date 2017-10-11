function clickReturn(set) {
    var oRe = document.createElement("img");
    oRe.src = set.img;
    oRe.id = "returnButton";
    document.body.appendChild(oRe);
    window.onscroll = function () {
        if(scrollTop()>=800){
            show(oRe);
        }else{
            hidden(oRe);
        }
    };

    oRe.addEventListener("click", function () {
        if(set.newImg){
            this.src = set.newImg;
        }
        target = 0;
        leader = scrollTop();
        animation();
    });
    var timer = null, target = 0, leader = 0;

    function animation() {
        clearInterval(timer);
        timer = setInterval(function () {
            var step = (target - leader) / 80;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leader += step;
            window.scrollTo(0, leader);
            console.log(step);
            if (target === leader) {
                clearInterval(timer);
                if(set.newImg){
                    oRe.src = set.img;
                }
            }
        }, 1);
    }

    function show(e) {
        e.style.display = "block";
    }

    function hidden(e) {
        e.style.display = "none";
    }

    function scrollTop() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
}