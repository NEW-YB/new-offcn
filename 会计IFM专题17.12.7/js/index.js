;(function(){
	//设置foot下的当前时间
	var nowtime=new Date();
	var nowyear=nowtime.getFullYear();
	$(".nowtime").html(nowyear);
	

	
//	第二部分切换
	$(".sec2_list li").mouseover(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".sec2_book").hide();
		$(".sec2_book").eq($(this).index()).show();
	})
	
	//	第十部分切换
	$(".kcap_list li").mouseover(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".kcap_right").hide();
		$(".kcap_right").eq($(this).index()).show();
	})
	
	
	//	第十二部分切换
	$(".qiye_list li").mouseover(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".qiye_box").hide();
		$(".qiye_box").eq($(this).index()).show();
	})
})();


