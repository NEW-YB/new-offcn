;(function(){
	
	$(".totop").click(function(){
		$("body,html").animate({
			scrollTop:0
		},500);
	});
	//立即报名
	$(".ljbm").mouseover(function(){
		$(this).find("ul").show();
	});
	$(".ljbm").mouseout(function(){
		$(this).find("ul").hide();
	});
	
	//课程系列
	$(".xilie_list li").mouseover(function(){
		$(".xilie_list li").removeClass("active");
		$(this).addClass("active");
		$(".xielie_box").hide();
		$(".xielie_box").eq($(this).index()).show();
	})
	
	//服务篇切换
	$(".fuwu_list li").mouseover(function(){
		$(".fuwu_show").hide();
		$(".fuwu_show").eq($(this).index()).show();
	})
	
	//当前时间
	var nowtime=new Date();
	var nowyear=nowtime.getFullYear();
	$(".nowtime").html(nowyear);
	
	//关闭弹窗
	$(".close").click(function(){
		$(".tc").hide();
	})
})()
