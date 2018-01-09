$(function(){
//	培训事业部分
	$(".px_change").each(function(){
		$(this).find(".px_change_list").first().show().siblings().hide();
	})
	$(".px_list").each(function(){
		$(this).find("li").mouseover(function(){
			$(this).addClass("active").siblings().removeClass("active");
			$(this).parent().next().find(".px_change_list").hide();
			$(this).parent().next().find(".px_change_list").eq($(this).index()).show();
		})
	})
	
})