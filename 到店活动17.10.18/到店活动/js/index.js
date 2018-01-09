;(function(){
//	$(".s1_list li").mouseover(function(){
//		$(this).addClass("active").siblings().removeClass("active");
//		$(".s1_change").hide();
//		$(".s1_change").eq($(this).index()).show();
//	})
	//点击马上报名锚点
	$(".maodian").click(function(){
		var s1Top=$(".sec1").offset().top;
		$("html,body").animate({scrollTop:s1Top},500);
	})
	
//	省份弹窗
	$(".sl1_signup").click(function(){
		$(".xf1").show();
	})
	$(".sl2_signup").click(function(){
		$(".xf2").show();
	})
	$(".sl3_signup").click(function(){
		$(".xf3").show();
	})
	$(".ad_tan").click(function(){
		$(".xf4").show();
	})
	$(".close").click(function(){
		$(this).parent().hide();
	})
	
	
	//当前时间
	var nowtime=new Date();
	var nowyear=nowtime.getFullYear();
	$(".nowtime").html(nowyear);
	
//	左侧浮窗
	var timer=setInterval(function(){
		$(".zixun_ewm").animate({
			"left":"-108"
		},500)
	},2000)
	$(".fixed").mouseover(function(){
		$(".zixun_ewm").animate({
			"left":"40"
		},500);
		clearInterval(timer);
	})
	$(".fixed").mouseout(function(){
		timer=setInterval(function(){
			$(".zixun_ewm").animate({
				"left":"-108"
			},500)
		},2000)
	})
	
	
})()
