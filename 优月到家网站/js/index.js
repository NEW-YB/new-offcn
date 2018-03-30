;(function(){
	//设置foot下的当前时间
	var nowtime=new Date();
	var nowyear=nowtime.getFullYear();
	$(".nowtime").html(nowyear);
	
//	首页月嫂切换
	$(".yuesao_list li").mouseover(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".yuesao_intro").hide();
		$(".yuesao_intro").eq($(this).index()).show();
	})
	
//	首页母婴课堂切换
	$(".ketang_list li").mouseover(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".ketang_change").hide();
		$(".ketang_change").eq($(this).index()).show();
	})

	
	
})();


