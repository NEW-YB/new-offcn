;(function(){
	//设置foot下的当前时间
	var nowtime=new Date();
	var nowyear=nowtime.getFullYear();
	$(".nowtime").html(nowyear);


//	地址选择
	$(".sec3_bg li").click(function(){
		$(".sec3_bg li").removeClass("active");
		$(this).addClass("active");
		$(".sec3_bg .dizhi").hide();
		$(".sec3_bg .dizhi").eq($(this).index(".sec3_bg li")).show();
	})
	
})();


