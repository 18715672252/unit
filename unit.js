function browserRedirect() {
	var sUserAgent = navigator.userAgent.toLowerCase();
	if(/ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(sUserAgent)) {
		//跳转移动端页面
		alert('跳转移动端页面')
	} else {
		//跳转pc端页面
		alert('跳转pc端页面')
	}
}
browserRedirect();
//获取一个元素相对于body的offsetLeft和offsetTOp无论相对于谁定位
function offset(curEle) {
	var totalLeft = null,
		totalTop = null,
		par = curEle.offsetParent; //        首先把自己本身的进行累加       
	totalLeft += curEle.offsetLeft;
	totalTop += curEle.offsetTop; //        只要没有找到body，我们就把父级参照物的边框和偏移量也进行累加       
	while(par) { //            不是标准的IE8浏览器，我们才进行累加边框            
		if(navigator.userAgent.indexOf("MSIE 8.0") === -1) { //                累加父级参照物的边框                
			totalLeft += par.clientLeft;
			totalTop += par.clientTop;
		} //            累加父级参照物本身的偏移
		totalLeft += par.offsetLeft;
		totalTop += par.offsetTop;
		par = par.offsetParent;
	}
	return {
		left: totalLeft,
		top: totalTop
	}
}
//验证手机号的正则表达式
var reg_phone = /^1[34578]\d{9}$/;
//在数组原型上添加删除数组中某个元素的方法 , 后可以直接调用该数组方法
Array.prototype.remove = function(val) {
	var index = this.indexOf(val);
	if(index > -1) {
		this.splice(index, 1);
		return this;
	} else {
		console.log('该元素不在该数组中!')
	}
};
//判断某个对象是否存在于数组中,存在返回true, 不存在返回false
Array.prototype.contains1 = function(obj) {
  var i = this.length;
  while (i--) {
    if (JSON.stringify(this[i]) === JSON.stringify(obj)) {
      return true;
    }
  }
  return false;
}
//index1自身元素的下标,index2 = index1 - 1时向数组前面移动一位,index2 = index1 + 1时向数组后面移动一位
Array.prototype.swapArray = function(index1, index2){
	this[index1] = this.splice(index2, 1, this[index1])[0];
	console.log(index1,index2)
    return this;
}
//ajax全局事件
//ajax全局事件 , 必须绑定在document身上
$(document).on('ajaxStart',function(){//ajax请求发送时触发,ajax的全局方法(所有的ajax)
	NProgress.start()//进度条插件
})
$(document).on('ajaxComplete',function(){//ajax请求完成时触发,ajax的全局方法(所有的ajax)
	 NProgress.done()//进度条插件
})
//显示上传的图片
$("input").change(function(){
        var files = this.files;
        if(!files.length) {
            return;
        }
        $("img").attr("src", window.URL.createObjectURL(files[0]));
    });
	console.log(0 == '')//true
	Array.splice(index,1)//删除数组中下标为index的元素,返回删除后的新数组
	Array.splice(index , 0 , 1);//向数组指定位置中插入一个元素,返回插入后的新数组
