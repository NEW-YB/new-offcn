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
		$(".tc,.mask").hide();
	})


	//右侧浮窗锚点
	$(".fix_list li").click(function(){
		var sc_top=$(".maodian"+$(this).index()+"").offset().top;
		$("body,html").animate({
			scrollTop:sc_top
		},500);
	})
	
	
//	课程切换
	$(".kc_tt li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".kc_list").hide();
		$(".kc_list").eq($(this).index()).show();
	})
	
})();


