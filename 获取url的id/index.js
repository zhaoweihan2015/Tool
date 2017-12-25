function getId() {
    var url = location.href
    if (url.indexOf('?') == -1) {
        return false
    }
    var info = url.split('?')[1].split('&')
    var res = {}
    info.forEach(function(e) {
        var inf = e.split('=')
        res[inf[0]] = inf[1]
    })
    return res
}