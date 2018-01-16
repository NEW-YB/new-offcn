;(function(){
	var time=new Date;
	var year=time.getFullYear();
	$(".footer span").html(year);
	
	$(".huan").eq(0).show();
	$(".dizhi_bx li").mouseover(function(){
		$(this).addClass("on").siblings().removeClass("on");
		$(".huan").eq($(this).index()).show().siblings().hide();
	})

	$(".guan").click(function(){
		$(".yiny").hide();
		$(".tanc").hide();
	})
	$(".wenz").click(function(){
		$(".yiny").show();
		$(".tanc").show();
	})
	
	
//	获奖关闭按钮
	$(".close").click(function(){
		$(".prize").hide();
		$(".yiny").hide();
	})
	
//	右侧悬浮锚点
	$(".totel").click(function(){
		var sc_top=$(".dishi").offset().top;
		$("body,html").animate({
			scrollTop:sc_top
		},500);
	})
	
})()
