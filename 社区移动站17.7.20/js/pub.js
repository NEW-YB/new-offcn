// JavaScript Document

$(function(){
		
	var deviceWidth = document.documentElement.clientWidth;
	if(deviceWidth > 720) deviceWidth = 720;
	document.documentElement.style.fontSize = deviceWidth / 7.2 + 'px';

	TouchSlide({ 
		slideCell:"#slideBox",
		titCell:".hd ul",
		mainCell:".bd ul",
		effect:"leftLoop",
		autoPage:true, 
		autoPlay:true
	});
})