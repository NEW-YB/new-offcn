;(function(){
//	广告锚点
	$(".sec2_ad").click(function(){
		var sctop=$(".sec2_bot").offset().top-33;
		$("body,html").animate({"scrollTop":sctop},500)
	})
	
//	地址二维码切换
	$(".address_list li").mouseover(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".ewm_right").hide();
		$(".ewm_right").eq($(this).index()).show();
	})

//	关闭弹窗
	$(".close").click(function(){
		$(".tanc").hide();
	})
	
	//当前时间
	var nowtime=new Date();
	var nowyear=nowtime.getFullYear();
	$(".nowtime").html(nowyear);
	

	
	
})()
