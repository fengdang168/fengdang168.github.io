var bodyBgs =[
         "https://hefollo.com/apis.php?type=本人使用壁纸",
       "https://hefollo.com/apis.php?type=电脑端-植物图片",
	   "https://hefollo.com/apis.php?type=电脑端-美女图片",
	   "https://hefollo.com/apis.php?type==电脑端-谷歌每日图片",
	  	         ];  //API接口
function clock(){
var randomBgIndex = Math.floor( Math.random() * 4+1);
document.body.style.background = "url("+bodyBgs[randomBgIndex]+") fixed";
}
window.ondblclick = function() {
    clock();
}
