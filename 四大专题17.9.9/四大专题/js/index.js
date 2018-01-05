;(function(){
	//设置foot下的当前时间
	var nowtime=new Date();
	var nowyear=nowtime.getFullYear();
	$(".nowtime").html(nowyear);
	
	
//	设置宣讲列表最后一行没下边界线
	$(".sd_list").each(function(){
		$(this).find("li").last().css("border","none");
	})
	$(".xuanjiang span").mouseover(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".xj_box").hide();
		$(".xj_box").eq($(this).index()).show();
	})
	$(".sida span").mouseover(function(){
		$(this).parent().find("span").removeClass("active");
		$(this).addClass("active");
		$(this).parents(".xj_box").find(".sd_list").hide();
		$(this).parents(".xj_box").find(".sd_list").eq($(this).index()).show();
	})
	

	
	
})();
