// JavaScript Document

$(function(){
	function fs(){
		var deviceWidth = document.documentElement.clientWidth;
		if(deviceWidth > 750) deviceWidth = 750;
		document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
	}
	window.onresize=fs;
	fs();

	TouchSlide({ 
		slideCell:"#slideBox",
		titCell:".hd ul",
		mainCell:".bd ul",
		effect:"leftLoop",
		autoPage:true, 
		autoPlay:true
	});
})