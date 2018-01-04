;(function(){
	
	
	//当前时间
	var nowtime=new Date();
	var nowyear=nowtime.getFullYear();
	$(".nowtime").html(nowyear);
	
	//底部地址切换
	$(".dizhi_list li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".dizhi_inform").hide();
		$(".dizhi_inform").eq($(this).index()).show();
	})
	
	//右侧浮窗锚点
	$(".fix_list li").click(function(){
		var sc_top=$(".maodian"+$(this).index()+"").offset().top;
		$("body,html").animate({
			scrollTop:sc_top
		},500);
	})
})()
