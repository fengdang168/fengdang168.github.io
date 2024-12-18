var bodyBgs =[
        "https://api.vvhan.com/api/view",
       "https://api.qzink.me/spotlight?orientation=landscape",
	   "https://api.yimian.xyz/img?type=wallpaper",
	   "https://cdn.seovx.com/ha/?mom=302",
	   "https://cdn.seovx.com/?mom=302",
	   "https://source.unsplash.com/collection/collectionid/1600x900",
	   "http://api.btstu.cn/sjbz/?lx=meizi",
	         ];  //API接口
function clock(){
var randomBgIndex = Math.floor( Math.random() * 7+1);
document.body.style.background = "url("+bodyBgs[randomBgIndex]+") fixed";
}
window.ondblclick = function() {
    clock();
}