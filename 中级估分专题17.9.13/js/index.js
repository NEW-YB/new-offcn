;(function(){
	//设置foot下的当前时间
	var nowtime=new Date();
	var nowyear=nowtime.getFullYear();
	$(".nowtime").html(nowyear);
	
//	返回顶部
	$(".totop").click(function(){
		$("html,body").stop().animate({
			scrollTop:0
		},500)
	})

//	关闭弹层
	$(".close").click(function(){
		$(this).parent().hide();
		$(".mask").hide();
	})

//	输入框选中提高层级
	$(".inp_box .xzzt").focus(function(){
		$(this).css("z-index","20").siblings().css("z-index","10")
	})
	
	
	
	//右侧浮窗锚点
	$(".fix_list .mao").click(function(){
		var sc_top=$(".maodian"+$(".mao").index($(this))+"").offset().top;
		$("body,html").animate({
			scrollTop:sc_top
		},500);
	})
	
	
})();


