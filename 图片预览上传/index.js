//显示上传图片的地址
//用户显示上传图片（因为并没有上传到数据库，所以看到的还是本地的内容）
function getObjectURL(file) {
    var url = null;
    if (window.createObjectURL != undefined) {
        url = window.createObjectURL(file)
    } else if (window.URL != undefined) {
        url = window.URL.createObjectURL(file)
    } else if (window.webkitURL != undefined) {
        url = window.webkitURL.createObjectURL(file)
    }
    return url
};

//图片上传
//FormData 二进制表单上传，但是有兼容性问题，好处是可以不用flash了
imgElement.on('change', function() {
    var formData = new FormData()
    formData.append('file', this.file[0])
    $.ajax({
        type: "post",
        url: "url",
        data: formData
        dataType: 'json',
        success: function(data) {
            //#code
        }
    });
})